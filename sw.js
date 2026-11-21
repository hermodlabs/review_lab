/* Build substitutes the two constants. This file is otherwise ordinary JS. */
const VERSION = "a0ad9f0658e134ad1e43";
const ASSETS = [{"url":"app-configs/README.txt","sha256":"9983e7f75e07a42a3e5b2c863255fa25821277c875961a5b378bddbdceca0eb3","bytes":3419},{"url":"app-configs/apps/complete-first-shipment/3/app.app.json","sha256":"9d93f2ca510944c6854b3d4254840491d75541d822c01f758c48cbef44d46541","bytes":117740},{"url":"app-configs/apps/complete-first-shipment/3/inputs.mapping.json","sha256":"7553366dc1749dcfb2688b712e9a70bfd6a3ed293a87cc5fda56c8287c0314f1","bytes":37202},{"url":"app-configs/apps/complete-first-shipment/3/inputs.workbook.json","sha256":"dfc76e7defca64ea3e68e1d1a62ee64cdbce6345eba77f6ef558e03fb6fac248","bytes":171294},{"url":"app-configs/apps/complete-first-shipment/3/model.yaml","sha256":"1f4637f6bf16b1a781e56b1893214691297d5c15a53e24c285fb5c4255f9b69f","bytes":34548},{"url":"app-configs/apps/review-gift-kit-earliest-evidence/2/app.app.json","sha256":"6107a73c004fc8fe30b4528251aba7e19eec5cda0aee972c4114d55223228461","bytes":140626},{"url":"app-configs/apps/review-gift-kit-earliest-evidence/2/inputs.mapping.json","sha256":"ba9237cc5729983435e5f0ed1975c652c1292b179246c3e64c2856f5e86ca91b","bytes":15470},{"url":"app-configs/apps/review-gift-kit-earliest-evidence/2/inputs.workbook.json","sha256":"0f86325177008dd05842275ee8acbfbb1b3c6428a0ef77083f920f9ea2431f27","bytes":177006},{"url":"app-configs/apps/review-gift-kit-earliest-evidence/2/model.yaml","sha256":"37c67954c4d1d199af2670488941d7df3820c71fe6a307c8bd2f508eb5dc302d","bytes":43386},{"url":"app-configs/apps/review-gift-kit-earliest-planning/2/app.app.json","sha256":"61fdfcfb0f38f4a59d9638366545b11791c0fcb02d83a191cce79acf5551fb10","bytes":124709},{"url":"app-configs/apps/review-gift-kit-earliest-planning/2/inputs.mapping.json","sha256":"fc280435f8d0fdd546dc52f5797ec8e0a357d198d9cf30f5344ed58744bdf567","bytes":24352},{"url":"app-configs/apps/review-gift-kit-earliest-planning/2/inputs.workbook.json","sha256":"b0e673cc7ecd7d5162182adab4eed2fd80d987201f737acbf78c23f8d6d1494a","bytes":162117},{"url":"app-configs/apps/review-gift-kit-earliest-planning/2/model.yaml","sha256":"2485ccdc55fd328c17ba84093350ad8ee92d6abbe89766981dd26384dbac239a","bytes":36895},{"url":"app-configs/apps/review-gift-kit-flexible-evidence/2/app.app.json","sha256":"538f7f58a83a50f862463fb7368b20aa1911ad37c395a9ec5d5b9f7024fb99c6","bytes":140626},{"url":"app-configs/apps/review-gift-kit-flexible-evidence/2/inputs.mapping.json","sha256":"fbd4a08ab351476829478a6ee1c30a85d42bcc1392baabb744bd9b029a4627b6","bytes":15470},{"url":"app-configs/apps/review-gift-kit-flexible-evidence/2/inputs.workbook.json","sha256":"beea9002c3981c745a10e57fadcf889508fae72fd4d02d088ace2774a460b8af","bytes":177006},{"url":"app-configs/apps/review-gift-kit-flexible-evidence/2/model.yaml","sha256":"d08a35933811290733c30f5ea5770a152f7bb2776493f230dea5479cc604fdcf","bytes":43386},{"url":"app-configs/apps/review-gift-kit-flexible-planning/2/app.app.json","sha256":"a0042522a0872839a2c81c2d7d7f2d6c8a9828f7d934e9ad22788a1751b68ec8","bytes":124690},{"url":"app-configs/apps/review-gift-kit-flexible-planning/2/inputs.mapping.json","sha256":"80657430f680619301b0236bec30024d8ccfe30f473af1f2c4f44c10b60989db","bytes":24333},{"url":"app-configs/apps/review-gift-kit-flexible-planning/2/inputs.workbook.json","sha256":"ce0e9e7802b1f062823a40921797c52da685937c89eb041cb6a685cfddef582b","bytes":162079},{"url":"app-configs/apps/review-gift-kit-flexible-planning/2/model.yaml","sha256":"cf44dec307c7adae7977c022bbfd21dfd5de293f324c7af3eb1962a9013bff2d","bytes":36895},{"url":"app-configs/catalog.json","sha256":"8c9c16d88c448b5b134b92a9ccd2a3722f1ba6d8d185137c9410b4431e94a6ec","bytes":29173},{"url":"app-configs/collection-definitions.json","sha256":"02987942487d6d0c6e9b0b6dd3aa7478eb10df97c9f7dae84f114e49971c2004","bytes":8359},{"url":"app-configs/collections/decision-lab/gifting-operations/2.4.0/collection.collection.json","sha256":"0fbe4d6ac6b8fba5d4dddfd013473cb64ae7383902f24835e988596db449c664","bytes":3250},{"url":"app-configs/collections/decision-lab/order-fulfillment/1.5.0/collection.collection.json","sha256":"4fa069d6bc49b247cbf500eef4aa8c97ee3ea1d18c8670a5e98173b65cc5398f","bytes":2015},{"url":"app-configs/collections/decision-lab/restaurant-operations/1.1.0/collection.collection.json","sha256":"470fb2284373778aea2672223179a670141301e2a2c7f0b56c3da4fcea11e982","bytes":1361},{"url":"app-configs/collections/decision-lab/venue-operations/1.5.0/collection.collection.json","sha256":"8e3b926d09877209dd4bb71338fe4786c530f2a8ca4c453c21df8d2ca4e96f17","bytes":1338},{"url":"app-configs/generate-feed.mjs","sha256":"8a829bca05944482a1eae4d8a5f90d7f4ebf2e7e6380138786d202d201d8abf1","bytes":12486},{"url":"app-configs/workbook-definitions.json","sha256":"17801991a83cae9827104524c80313554569f199261d8b84fa20ca71b1cac6aa","bytes":1770},{"url":"app-configs/workflows/repair-published-restaurant-roster/1.1.0/inputs.mapping.json","sha256":"ec3f4f001bcdc2542b930636f6caa2eb0e5fbc5af2c7b38d718c4a30c07932f4","bytes":19898},{"url":"app-configs/workflows/repair-published-restaurant-roster/1.1.0/inputs.workbook.json","sha256":"a6f078a1053874227fb64cb3216520b2994e9e6e002bd10229f23d30239d1a66","bytes":1716014},{"url":"app-configs/workflows/repair-published-restaurant-roster/1.1.0/workflow.workflow.json","sha256":"82a2b7a9d0502282abf6f85565aa0cc36964e8b70a50410463d546c9b63ab342","bytes":1637850},{"url":"app-configs/workflows/review-first-shipment/1.5.0/inputs.mapping.json","sha256":"95d3d178cdd3b81e555bcb249e6108677fbafb2a9cf8472b2bb345dd51f400dc","bytes":52275},{"url":"app-configs/workflows/review-first-shipment/1.5.0/inputs.workbook.json","sha256":"26a662abfe4740f547c698c3a14620c02779540332b95eac7a0c20438b53e8d7","bytes":1134320},{"url":"app-configs/workflows/review-first-shipment/1.5.0/workflow.workflow.json","sha256":"1ed1c75f9ceedde91d316df20ccb08ce33ab9f0eaa192666e20bf3bffad34129","bytes":1030600},{"url":"app-configs/workflows/review-gift-kit-earliest/2.4.0/inputs.mapping.json","sha256":"cf3a0499394885dab19729475507f6266d662fbae0f58854c8259883951f2e3e","bytes":29961},{"url":"app-configs/workflows/review-gift-kit-earliest/2.4.0/inputs.workbook.json","sha256":"b7ef92f81f4295e08adaba0d709cd670153705ddd880c3d7bc5db0bbbff6ab72","bytes":620191},{"url":"app-configs/workflows/review-gift-kit-earliest/2.4.0/workflow.workflow.json","sha256":"9e20b343c0cbfeae346d2f1eaf5af169ccae910345ff89a1c3461850592be746","bytes":556869},{"url":"app-configs/workflows/review-gift-kit-flexible/2.4.0/inputs.mapping.json","sha256":"45bc2673855544c7d1125a59c6aee16cf77f2cc8742ca0fae7fafad19669dca3","bytes":29958},{"url":"app-configs/workflows/review-gift-kit-flexible/2.4.0/inputs.workbook.json","sha256":"2cdb0a4449a6adc4ba684f7b4176a1a24a968170532aeddc9f212a1ff3ba6c52","bytes":620167},{"url":"app-configs/workflows/review-gift-kit-flexible/2.4.0/workflow.workflow.json","sha256":"c32f7af3bf3cf8b23acb903802103717a455fa4616752e4cccba44810bfb3a7c","bytes":556848},{"url":"app-configs/workflows/street-team-deployment/1.6.0/inputs.mapping.json","sha256":"42c581c7af0080575fec3c61fbca075c249f1efbca2ca487deebdcd2763eb766","bytes":17357},{"url":"app-configs/workflows/street-team-deployment/1.6.0/inputs.workbook.json","sha256":"5ef3b49818d264de635266057d5f98bb6d6cdbf7f2eeb28c05a11aade4bbaadb","bytes":278003},{"url":"app-configs/workflows/street-team-deployment/1.6.0/workflow.workflow.json","sha256":"e58c4e3a44fa25acdf5ad0ac94555d945429840a3de0e3cbf48d5897a88c0c38","bytes":248057},{"url":"assets/exceljs.min-w6OpPz6C.js","sha256":"33dd30b2a782eed78456b4847886e4a8a853ea127210f59e02c6a71f2d569d2a","bytes":929558},{"url":"assets/index-LwFeTGty.js","sha256":"5cd331cc5d2991d430cd49190b030d7886d172b271ed0244ccb03657b28119c9","bytes":1816742},{"url":"assets/index-Rl2PZDBi.css","sha256":"2345677b02165486c85d106f9bff37392541a3274c26736a1a9d5f48bb9e034c","bytes":207653},{"url":"assets/jszip.min-clM_xZOd.js","sha256":"6486764767cc6f19c41a56237979eb593e661b7301be516bd5ecf02bc54559f6","bytes":95949},{"url":"assets/worker-B0r_fa8N.js","sha256":"2c18dbdfa70e5a35268ae73615a7c32ba93723a64bb62b40c51de4d482eff3b8","bytes":407853},{"url":"icons/apple-touch-icon.png","sha256":"f1c00a658b8624d426cbaad55e657b745199ef44cc53895e903dae3779316406","bytes":3106},{"url":"icons/icon-192.png","sha256":"1e62d29d9408a73290713cdcaf06ccb864a41622c5630003a43329ae63cdd939","bytes":3354},{"url":"icons/icon-512.png","sha256":"1518aa985e9651341244a438940445786422c569054769f47ab3505a26c11e1f","bytes":14155},{"url":"icons/icon.svg","sha256":"4192a9789a88322045befef54019e150d1201a1bf51a43c582688a25b2f509b2","bytes":401},{"url":"icons/maskable-512.png","sha256":"b5d1f90f7e9eed29ad94010dfd7db9ac5079c75c026c17f68556c9ecddd11e43","bytes":9893},{"url":"index.html","sha256":"fd8fd7684f175a2185106ba0589288d72356e85f5435928dd91795f48fcc3f96","bytes":1023},{"url":"manifest.webmanifest","sha256":"1de01995f29eab75e2606b8fdb549bd90a1a5e673a397c59619207cb9e30aba8","bytes":760}];
const SCOPE = self.registration.scope;
const PREFIX = `hermod-review-lab:pwa:${encodeURIComponent(SCOPE)}:`;
const CACHE = PREFIX + VERSION;
const MARKER = new URL("__hermod_offline_ready__", SCOPE).href;
const INDEX = new URL("index.html", SCOPE).href;
const URLS = new Set(ASSETS.map((asset) => new URL(asset.url, SCOPE).href));
const assetFolder = new URL("assets/", SCOPE).pathname;
const absolute = (asset) => new URL(asset.url, SCOPE).href;
const hex = (bytes) =>
  Array.from(new Uint8Array(bytes), (b) =>
    b.toString(16).padStart(2, "0"),
  ).join("");
let filling = null;
let pruning = null;

async function readiness() {
  const cache = await caches.open(CACHE);
  const marker = await cache.match(MARKER);
  if (!marker) return false;
  const status = await marker.json();
  if (status.version !== VERSION) return false;
  // Also detect eviction/deletion of individual assets; a marker alone is insufficient.
  const present = await Promise.all(
    ASSETS.map((a) => cache.match(absolute(a))),
  );
  return present.every(Boolean);
}

function fillCache(installing = false) {
  if (filling) return filling;
  filling = (async () => {
    const cache = await caches.open(CACHE);
    const results = await Promise.allSettled(
      ASSETS.map(async (asset) => {
        const url = absolute(asset);
        if (!installing && (await cache.match(url))) return;
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 60000);
        try {
          const response = await fetch(
            new Request(url, {
              cache: "reload",
              credentials: "same-origin",
              signal: controller.signal,
            }),
          );
          if (!response.ok || response.type === "opaque")
            throw new Error(`Could not cache ${asset.url}`);
          const bytes = await response.clone().arrayBuffer();
          const digest = hex(await crypto.subtle.digest("SHA-256", bytes));
          if (digest !== asset.sha256)
            throw new Error(`Build mismatch for ${asset.url}`);
          await cache.put(url, response);
        } finally {
          clearTimeout(timer);
        }
      }),
    );
    const failure = results.find((result) => result.status === "rejected");
    if (failure) {
      // A failed new install must never touch the working build's cache.
      if (installing) await caches.delete(CACHE);
      throw failure.reason;
    }
    const existing = await cache.match(MARKER);
    const createdAt = existing ? (await existing.json()).createdAt : Date.now();
    await cache.put(
      MARKER,
      new Response(JSON.stringify({ version: VERSION, createdAt }), {
        headers: { "Content-Type": "application/json" },
      }),
    );
  })().finally(() => {
    filling = null;
  });
  return filling;
}

self.addEventListener("install", (event) => {
  // No skipWaiting: a replacement waits for an explicit user update.
  event.waitUntil(fillCache(true));
});

function clientVersion(client) {
  return new Promise((resolve) => {
    const channel = new MessageChannel();
    const timer = setTimeout(() => {
      channel.port1.close();
      resolve(null);
    }, 1800);
    channel.port1.onmessage = (event) => {
      clearTimeout(timer);
      channel.port1.close();
      resolve(
        typeof event.data?.version === "string" ? event.data.version : null,
      );
    };
    try {
      client.postMessage({ type: "HERMOD_CLIENT_VERSION", scope: SCOPE }, [
        channel.port2,
      ]);
    } catch {
      clearTimeout(timer);
      resolve(null);
    }
  });
}

function pruneUnusedBuilds() {
  if (pruning) return pruning;
  pruning = (async () => {
    const windows = await self.clients.matchAll({ type: "window" });
    const versions = await Promise.all(windows.map(clientVersion));
    // An older app or unresponsive tab may still need its lazy assets. Keep them.
    if (versions.some((version) => !version)) return;
    const keep = new Set([VERSION, ...versions]);
    const currentMarker = await (await caches.open(CACHE)).match(MARKER);
    if (!currentMarker) return;
    const current = await currentMarker.json();
    for (const key of await caches.keys()) {
      if (!key.startsWith(PREFIX) || keep.has(key.slice(PREFIX.length)))
        continue;
      const marker = await (await caches.open(key)).match(MARKER);
      if (!marker) continue; // A new build may still be installing.
      const info = await marker.json();
      // Never remove a waiting/newer build, even when the active worker is older.
      if (info.createdAt < current.createdAt) await caches.delete(key);
    }
  })().finally(() => {
    pruning = null;
  });
  return pruning;
}

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      await self.clients.claim();
      await pruneUnusedBuilds();
    })(),
  );
});

self.addEventListener("message", (event) => {
  const { type } = event.data || {};
  const port = event.ports?.[0];
  const reply = (value) => port?.postMessage(value);
  event.waitUntil(
    (async () => {
      try {
        if (type === "HERMOD_STATUS")
          reply({ version: VERSION, ready: await readiness(), scope: SCOPE });
        if (type === "HERMOD_ACTIVATE") {
          if (!(await readiness()))
            throw new Error("The new build is not fully cached.");
          reply({ ok: true });
          await self.skipWaiting();
        }
        if (type === "HERMOD_REPAIR") {
          await fillCache(false);
          reply({ ok: true, ready: await readiness(), version: VERSION });
        }
        if (type === "HERMOD_CLIENT_READY") await pruneUnusedBuilds();
      } catch (error) {
        reply({ ok: false, error: error.message });
      }
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== new URL(SCOPE).origin) return;
  const plain = new URL(url);
  plain.search = "";
  plain.hash = "";
  const navigation =
    request.mode === "navigate" &&
    (plain.href === SCOPE || plain.href === INDEX);
  const ownedAsset =
    URLS.has(plain.href) || url.pathname.startsWith(assetFolder);
  if (!navigation && !ownedAsset) return; // Never catch sibling apps or external requests.
  event.respondWith(
    (async () => {
      const target = navigation ? INDEX : plain.href;
      const current = await (await caches.open(CACHE)).match(target);
      if (current) return current;
      // An old tab may request a previous build's content-hashed lazy module.
      if (!navigation && url.pathname.startsWith(assetFolder)) {
        for (const key of await caches.keys()) {
          if (!key.startsWith(PREFIX) || key === CACHE) continue;
          const previous = await (await caches.open(key)).match(target);
          if (previous) return previous;
        }
      }
      return fetch(request); // Do not return index.html for a missing JS or WASM file.
    })(),
  );
});
