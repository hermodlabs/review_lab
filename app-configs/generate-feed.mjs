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

async function checkFile(file) {
  if (!file || typeof file.path !== 'string' || file.path.includes('\\') || file.path.split('/').some(part => ['', '.', '..'].includes(part)))
    throw new Error('Catalog file paths must stay inside this folder.');
  const location = resolve(root, file.path);
  if (!location.startsWith(root.endsWith(sep) ? root : root + sep)) throw new Error('Catalog file path leaves this folder.');
  const bytes = await readFile(location);
  if (bytes.length !== file.bytes || sha256(bytes) !== file.sha256) throw new Error(`File differs from its catalog checksum: ${file.path}`);
  return bytes;
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
  if (catalog.schemaVersion !== 1 || catalog.kind !== 'decision-lab-app-catalog' || !Array.isArray(catalog.apps) || !catalog.apps.length)
    throw new Error('Use a supported, nonempty Decision Lab app catalog.');
  const identities = new Set(), items = [];
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
    if (envelope.schemaVersion !== 1 || envelope.kind !== 'hermod-published-app-package'
      || envelope.app?.id !== app.id || envelope.app?.version !== app.version || envelope.app?.contentHash !== app.contentHash)
      throw new Error(`Package identity differs from its catalog listing: ${identity}`);
    if (sourceBytes.toString('utf8') !== envelope.app.source)
      throw new Error(`Canonical YAML differs from its packaged source: ${identity}`);
    const download = url(app.package.path);
    items.push(`    <item>
      <title>${xml(app.name)} — version ${app.version}</title>
      <link>${xml(download)}</link>
      <description>${xml(app.description)}</description>
      <guid isPermaLink="false">${xml(`decision-lab:${identity}:${app.contentHash}`)}</guid>
      <pubDate>${xml(new Date(app.publishedAt).toUTCString())}</pubDate>
      <category>${xml(app.domain.label)}</category>
      <category>${xml(app.useCase.label)}</category>
      <category>${xml(app.pattern.label)}</category>
      <enclosure url="${xml(download)}" length="${packageBytes.length}" type="application/json" />
    </item>`);
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
  console.log(`Created feed.xml with ${items.length} app releases. Public feed URL: ${url('feed.xml')}`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
