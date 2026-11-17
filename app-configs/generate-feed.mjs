#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { resolve, sep } from 'node:path';

// Standalone distribution helper: no Decision Lab source or dependencies needed.
const root = fileURLToPath(new URL('.', import.meta.url));
const usage = 'Usage: node generate-feed.mjs --base-url https://OWNER.github.io/REPOSITORY/';
const xml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]);
const sha256 = buffer => createHash('sha256').update(buffer).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const canonicalHash = value => sha256(JSON.stringify(canonical(value)));
const same = (left, right) => canonicalHash(left) === canonicalHash(right);
function checkHash(value, label) {
  const { contentHash, ...payload } = value || {};
  if (typeof contentHash !== 'string' || contentHash !== canonicalHash(payload)) throw new Error(`${label} differs from its content hash.`);
}
function item({ productType, listing, packageBytes, categories, includedApps = [] }, url) {
  const download = url((listing.workbook || listing.package).path), identity = `${listing.publisher ? `${listing.publisher.id}:` : ''}${listing.id}:${listing.version}`;
  return `    <item>
      <title>${xml(listing.name)} — version ${listing.version}</title>
      <link>${xml(download)}</link>
      <description>${xml(listing.description)}</description>
      <guid isPermaLink="false">${xml(`decision-lab:${productType}:${identity}:${listing.contentHash}`)}</guid>
      <pubDate>${xml(new Date(listing.publishedAt).toUTCString())}</pubDate>
      <dl:productType>${productType}</dl:productType>
${categories.map(category => `      <category>${xml(category)}</category>`).join('\n')}
${includedApps.map(dependency => `      <dl:includedApp alias="${xml(dependency.id)}" id="${xml(dependency.appId)}" version="${dependency.version}" packageHash="${dependency.packageHash}" />`).join('\n')}
      <enclosure url="${xml(download)}" length="${listing.workbook?.bytes || packageBytes.length}" type="application/json" />
    </item>`;
}

async function checkFile(file) {
  if (!file || typeof file.path !== 'string' || file.path.includes('\\') || file.path.split('/').some(part => ['', '.', '..'].includes(part)))
    throw new Error('Catalog file paths must stay inside this folder.');
  const location = resolve(root, file.path);
  if (!location.startsWith(root.endsWith(sep) ? root : root + sep)) throw new Error('Catalog file path leaves this folder.');
  const bytes = await readFile(location);
  if (bytes.length !== file.bytes || sha256(bytes) !== file.sha256) throw new Error(`File differs from its catalog checksum: ${file.path}`);
  return bytes;
}

async function checkWorkbook(listing, packageHash) {
  if (!listing.workbook) return;
  const bytes = await checkFile(listing.workbook), release = JSON.parse(bytes.toString('utf8'));
  if (release.format !== 'decision-lab-workbook-release/1' || !['example', 'defaults'].includes(release.starterMeaning)
    || !release.starter || release.target?.contentHash !== packageHash) throw new Error(`Excel inputs differ from their exact product release: ${listing.id}.`);
  checkHash(release, 'Excel release'); checkHash(release.target, 'Excel target'); checkHash(release.mapping, 'Excel layout');
  const pin = release.mapping.target;
  if (pin.packageHash !== packageHash) throw new Error(`Excel layout targets a different package: ${listing.id}.`);
}

try {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === '--help') { console.log(usage); process.exit(0); }
  if (args.length !== 2 || args[0] !== '--base-url') throw new Error(usage);
  const base = new URL(args[1]);
  if (!['http:', 'https:'].includes(base.protocol) || base.username || base.password || base.search || base.hash)
    throw new Error('Use the public HTTP(S) folder URL without credentials, a query or a fragment.');
  if (!base.pathname.endsWith('/')) base.pathname += '/';
  const url = path => new URL(path.split('/').map(encodeURIComponent).join('/'), base).href;
  const catalog = JSON.parse(await readFile(new URL('./catalog.json', import.meta.url), 'utf8'));
  if (catalog.schemaVersion !== 1 || catalog.kind !== 'decision-lab-app-catalog' || !Array.isArray(catalog.apps) || !Array.isArray(catalog.workflows ?? []) || !Array.isArray(catalog.collections ?? []) || !catalog.apps.length && !catalog.workflows?.length && !catalog.collections?.length)
    throw new Error('Use a supported, nonempty Decision Lab marketplace catalog.');
  const identities = new Set(), items = [], products = new Map();
  for (const app of catalog.apps) {
    if (!app.id || !Number.isSafeInteger(app.version) || app.version < 1 || !app.name || !app.description
      || !app.domain?.label || !app.useCase?.label || !app.pattern?.label || !Number.isFinite(Date.parse(app.publishedAt)))
      throw new Error('Every listing needs an app identity, release version, description, classification and publication date.');
    const identity = `${app.id}:${app.version}`;
    if (identities.has(identity)) throw new Error(`Duplicate app release: ${identity}`);
    identities.add(identity);
    const packageBytes = await checkFile(app.package);
    const sourceBytes = await checkFile(app.source);
    const envelope = JSON.parse(packageBytes.toString('utf8'));
    if (!(envelope.format === 'decision-lab-app/1'
        || envelope.schemaVersion === 1 && envelope.kind === 'hermod-published-app-package')
      || envelope.app?.id !== app.id || envelope.app?.version !== app.version || envelope.app?.contentHash !== app.contentHash)
      throw new Error(`Package identity differs from its catalog listing: ${identity}`);
    if (sourceBytes.toString('utf8') !== envelope.app.source)
      throw new Error(`Canonical YAML differs from its packaged source: ${identity}`);
    const sdkPayload = { format: 'decision-lab-app/1', template: null, app: envelope.app, sourceProvenance: 'legacy' };
    products.set(JSON.stringify(['app', app.id, app.version]), { listing: app, packageHash: envelope.format === 'decision-lab-app/1' ? envelope.contentHash : canonicalHash(sdkPayload) });
    await checkWorkbook(app, envelope.format === 'decision-lab-app/1' ? envelope.contentHash : canonicalHash(sdkPayload));
    items.push(item({ productType: 'app', listing: app, packageBytes,
      categories: ['Standalone app', app.domain.label, app.useCase.label, app.pattern.label] }, url));
  }
  for (const workflow of catalog.workflows || []) {
    const identity = `workflow:${workflow.id}:${workflow.version}`;
    if (!workflow.id || !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(workflow.version)
      || !workflow.name || !workflow.description || !workflow.domain?.label || !workflow.useCase?.label
      || !Number.isFinite(Date.parse(workflow.publishedAt)) || workflow.requires?.workflowFormat !== 'decision-lab-workflow/1')
      throw new Error('Every workflow listing needs its identity, stable version, classification and supported format.');
    if (identities.has(identity)) throw new Error(`Duplicate workflow release: ${identity}`);
    identities.add(identity);
    const packageBytes = await checkFile(workflow.package), pkg = JSON.parse(packageBytes.toString('utf8'));
    if (pkg.format !== 'decision-lab-workflow-package/1' || pkg.workflow?.format !== 'decision-lab-workflow/1')
      throw new Error(`Unsupported workflow package: ${identity}`);
    checkHash(pkg, 'Workflow package'); checkHash(pkg.workflow, 'Workflow definition');
    if (!Array.isArray(pkg.workflow.dependencies) || !pkg.workflow.dependencies.length)
      throw new Error(`Workflow dependencies must be embedded: ${identity}`);
    const dependencies = pkg.workflow.dependencies.map(dependency => {
      const app = dependency.app;
      if (app?.format !== 'decision-lab-app/1' || app.template?.format !== 'decision-lab-template/1')
        throw new Error(`Unsupported embedded workflow app: ${identity}`);
      checkHash(app, 'Embedded app package'); checkHash(app.app, 'Embedded app release'); checkHash(app.template, 'Embedded template');
      if (dependency.packageHash !== app.contentHash) throw new Error(`Workflow dependency pin differs: ${dependency.id}`);
      return { id: dependency.id, appId: app.app.id, name: app.app.name, version: app.app.version,
        appContentHash: app.app.contentHash, packageHash: dependency.packageHash };
    });
    const expected = { id: pkg.workflow.id, version: pkg.workflow.version, name: pkg.workflow.title,
      description: pkg.workflow.description, publishedAt: pkg.publishedAt, contentHash: pkg.contentHash,
      definitionHash: pkg.workflow.contentHash, domain: pkg.catalog?.domain, useCase: pkg.catalog?.useCase,
      requires: { workflowFormat: 'decision-lab-workflow/1' }, dependencies };
    if (!same(expected, Object.fromEntries(Object.keys(expected).map(key => [key, workflow[key]]))))
      throw new Error(`Workflow package differs from its catalog listing: ${identity}`);
    products.set(JSON.stringify(['workflow', workflow.id, workflow.version]), { listing: workflow, packageHash: pkg.contentHash });
    await checkWorkbook(workflow, pkg.contentHash);
    items.push(item({ productType: 'workflow', listing: workflow, packageBytes,
      categories: ['Guided workflow', workflow.domain.label, workflow.useCase.label], includedApps: dependencies }, url));
  }
  for (const collection of catalog.collections || []) {
    const identity = JSON.stringify([collection.publisher?.id, collection.id, collection.version]);
    if (identities.has(identity)) throw new Error('Duplicate scoped collection release.');
    identities.add(identity);
    const packageBytes = await checkFile(collection.package), pkg = JSON.parse(packageBytes.toString('utf8'));
    if (pkg.format !== 'decision-lab-collection/1' || pkg.definition?.format !== 'decision-lab-collection-definition/1')
      throw new Error('Unsupported collection package.');
    checkHash(pkg, 'Collection package');
    const definition = pkg.definition;
    const expected = { id: definition.id, publisher: definition.publisher, version: definition.version,
      title: definition.title, description: definition.description, createdAt: pkg.createdAt, contentHash: pkg.contentHash };
    if (!same(expected, Object.fromEntries(Object.keys(expected).map(key => [key, collection[key]]))))
      throw new Error('Collection package differs from its catalog listing.');
    if (!Array.isArray(definition.members) || !Array.isArray(definition.useCases)) throw new Error('Collection membership is invalid.');
    const seen = new Set();
    for (const member of definition.members) {
      const product = products.get(JSON.stringify([member.type, member.id, member.version]));
      const key = JSON.stringify([member.type, member.id]);
      if (seen.has(key) || !product || product.packageHash !== member.packageHash || !same(member.artifact, product.listing.package)
        || !definition.useCases.some(row => row.id === member.useCaseId)) throw new Error('Collection member differs from its exact product package.');
      seen.add(key);
    }
    items.push(item({ productType: 'collection', listing: { ...collection, name: collection.title, publishedAt: collection.createdAt },
      packageBytes, categories: ['Collection', collection.publisher.label, collection.title] }, url));
  }
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dl="urn:decision-lab:marketplace:1">
  <channel>
    <title>${xml(catalog.title)}</title>
    <link>${xml(base.href)}</link>
    <description>${xml(catalog.description)}</description>
    <dl:catalog href="catalog.json" />
    <atom:link href="${xml(url('feed.xml'))}" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>
`;
  await writeFile(new URL('./feed.xml', import.meta.url), feed, 'utf8');
  console.log(`Created feed.xml with ${items.length} app, workflow and collection releases. Public feed URL: ${url('feed.xml')}`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
