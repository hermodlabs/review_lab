/* Build substitutes the two constants. This file is otherwise ordinary JS. */
const VERSION = "b27935e50553f58e8095";
const ASSETS = [{"url":"app-configs/README.txt","sha256":"9983e7f75e07a42a3e5b2c863255fa25821277c875961a5b378bddbdceca0eb3","bytes":3419},{"url":"app-configs/apps/complete-first-shipment/5/app.app.json","sha256":"3b853cf9c081714f49e5381c553ddc410152506004d05078c967cc35cac8046f","bytes":120983},{"url":"app-configs/apps/complete-first-shipment/5/inputs.mapping.json","sha256":"92254b601e2c8effc948f047213351da50b6d60dc4c4b39929d93b88edaa6875","bytes":37202},{"url":"app-configs/apps/complete-first-shipment/5/inputs.workbook.json","sha256":"295eb1887f13387dc4cd482c9896768cdb43da3abab10a3425175c76ca102bfc","bytes":174643},{"url":"app-configs/apps/complete-first-shipment/5/model.yaml","sha256":"a3c52201e7f40fb61f60b79b5644151a6c86d6fa3c36f6d491d2fd505e69c922","bytes":35826},{"url":"app-configs/apps/review-gift-kit-earliest-evidence/3/app.app.json","sha256":"1cde4393352558d7c211bf3c89550093768266d68a2b5966bc7f6d233c99ddda","bytes":140906},{"url":"app-configs/apps/review-gift-kit-earliest-evidence/3/inputs.mapping.json","sha256":"a8a02001ebd6347d6679cc639318349bcc555ea705fb282999fa7c97a472cda5","bytes":15470},{"url":"app-configs/apps/review-gift-kit-earliest-evidence/3/inputs.workbook.json","sha256":"32f0f46d1469a39144f33198f4efbfb70a3a55039e77a89729126fc54e3cbc49","bytes":177298},{"url":"app-configs/apps/review-gift-kit-earliest-evidence/3/model.yaml","sha256":"04d39f25e20448f3b289f916d486b2c8c98a48975253fe3141f94209248adf2d","bytes":43454},{"url":"app-configs/apps/review-gift-kit-earliest-planning/3/app.app.json","sha256":"1194a1001ca1bb74c122646677bb6d0b3cb0957aa1b8fcb01b2ee30201ae37d7","bytes":128577},{"url":"app-configs/apps/review-gift-kit-earliest-planning/3/inputs.mapping.json","sha256":"39e36d8a436b88402fc5c5c8609a0cf21bf4eefd7c97ce12f9a4a93bb84e4136","bytes":24352},{"url":"app-configs/apps/review-gift-kit-earliest-planning/3/inputs.workbook.json","sha256":"bf25d58e3f7f19cd873d1e750755050c78a5ff0fcde373943ddf8b4557c17bc0","bytes":166125},{"url":"app-configs/apps/review-gift-kit-earliest-planning/3/model.yaml","sha256":"1996c8885b117d35ad9ff5c5cc3fe4f107ec91f9cdca382012ab14d46039d15f","bytes":38329},{"url":"app-configs/apps/review-gift-kit-flexible-evidence/3/app.app.json","sha256":"744a163698afa837cd3795a1f3fda383da638aba9e88e3bc69a2b20a581e9e2f","bytes":140906},{"url":"app-configs/apps/review-gift-kit-flexible-evidence/3/inputs.mapping.json","sha256":"4fdb91486b50a1a179d581fa989a4d506c3aea22db8b75e1ac5797338e57f706","bytes":15470},{"url":"app-configs/apps/review-gift-kit-flexible-evidence/3/inputs.workbook.json","sha256":"0eaaf649e322cac64799509d03b04997fecb357ad6689b20f004d965ffc82f45","bytes":177298},{"url":"app-configs/apps/review-gift-kit-flexible-evidence/3/model.yaml","sha256":"cae8ddd7e2a6df3e3986c339a3c9a4c3cfe5e41d41ce794645bcf74115d2d398","bytes":43454},{"url":"app-configs/apps/review-gift-kit-flexible-planning/3/app.app.json","sha256":"7d7ebcde477e69d9a489032b4c1a886047d9392e1049f09597f3b6f0c65ea07d","bytes":128558},{"url":"app-configs/apps/review-gift-kit-flexible-planning/3/inputs.mapping.json","sha256":"7e256a5aa9c1ee4ac1f0a4640bd187a4d329b8040f303d1fa6a848b85a659639","bytes":24333},{"url":"app-configs/apps/review-gift-kit-flexible-planning/3/inputs.workbook.json","sha256":"ce8647479adffb7df29ffdfa4e1689b4e903e90a9ab45cb82a5dd257aa824d35","bytes":166087},{"url":"app-configs/apps/review-gift-kit-flexible-planning/3/model.yaml","sha256":"28f7540b24f7b8a8e40fb13c2c17800204076e217f4bf0f95fd5442e4ad777dc","bytes":38329},{"url":"app-configs/catalog.json","sha256":"70a4569f7d97c12347c7b8f6f890eac2c3ec0b76772dfe69882f6f3892477eab","bytes":29199},{"url":"app-configs/collection-definitions.json","sha256":"e9d33a211b471b64bf4e4529c3f2edab3501bc9a7be8de131f3fdec9f17b42fd","bytes":8359},{"url":"app-configs/collections/decision-lab/gifting-operations/2.5.0/collection.collection.json","sha256":"09a2a22f8cf9362c7e9c798775b01e31fdbfbb18dd9c39f8c720c505299bee4d","bytes":3250},{"url":"app-configs/collections/decision-lab/order-fulfillment/1.8.0/collection.collection.json","sha256":"ba49778bb6c35e5eeb35e59e016c5dd5ab497792ac23b38a6080e784eb53d03e","bytes":2015},{"url":"app-configs/collections/decision-lab/restaurant-operations/1.3.0/collection.collection.json","sha256":"0fffd44fbf2b43ea7d498390e22848e381e81d1e18e358307d84076f269ccb06","bytes":1361},{"url":"app-configs/collections/decision-lab/venue-operations/1.8.0/collection.collection.json","sha256":"285fd2147990b11dcf6ccdaff99762d490a6c9e745b0c8524085d88de64fb256","bytes":1338},{"url":"app-configs/generate-feed.mjs","sha256":"8a829bca05944482a1eae4d8a5f90d7f4ebf2e7e6380138786d202d201d8abf1","bytes":12486},{"url":"app-configs/workbook-definitions.json","sha256":"934800bda1cc9ff0268767afd7e80bac6e3ab06b13be870d138daa362642a476","bytes":1770},{"url":"app-configs/workflows/repair-published-restaurant-roster/1.3.0/inputs.mapping.json","sha256":"a1c6a0d4f6782db8e799ceaedcae33eab9e8ab96cee51ba8a82e9b0522d5c7d0","bytes":19898},{"url":"app-configs/workflows/repair-published-restaurant-roster/1.3.0/inputs.workbook.json","sha256":"697c17fc787ee20a2f417c1c741748966de38ebc60740b6aa93cfb9d02e2d985","bytes":1718819},{"url":"app-configs/workflows/repair-published-restaurant-roster/1.3.0/workflow.workflow.json","sha256":"841696b7a01a3484de7427ee33108ec591254f68bfd42dc369a35e123b2e639c","bytes":1640507},{"url":"app-configs/workflows/review-first-shipment/1.6.0/inputs.mapping.json","sha256":"46aea8a1dd84280fee972ee616beac55501e31eb9397827a272e77770bd96fbc","bytes":52275},{"url":"app-configs/workflows/review-first-shipment/1.6.0/inputs.workbook.json","sha256":"d2f2e759d5e46cbb5e5db4042f850316b62e556e94f1dd93beea58f2a7a166fa","bytes":1123984},{"url":"app-configs/workflows/review-first-shipment/1.6.0/workflow.workflow.json","sha256":"e37894c0bb31b8fb4430e776dbef00daaac87c6e51d5bac637051e5c11de0f78","bytes":1020536},{"url":"app-configs/workflows/review-gift-kit-earliest/2.5.0/inputs.mapping.json","sha256":"8fac58aa8d0c2a9a57db35b9190be2d6f37fb47770de8e390ccf4cdf30686ec8","bytes":29961},{"url":"app-configs/workflows/review-gift-kit-earliest/2.5.0/inputs.workbook.json","sha256":"34b8d09ea7d93158c03a662bae1bae673c104ac4b42211d94c28d722d30fdc6b","bytes":627441},{"url":"app-configs/workflows/review-gift-kit-earliest/2.5.0/workflow.workflow.json","sha256":"f188bf1d4cc8702f2642ceba501d6fa25e1ee7f432cf35a220ec5fb4faa48efd","bytes":563845},{"url":"app-configs/workflows/review-gift-kit-flexible/2.5.0/inputs.mapping.json","sha256":"6e9fb83712be52f41cbfae92740ff8b98626d210064ba6a6ba4bddaa2832ecf0","bytes":29958},{"url":"app-configs/workflows/review-gift-kit-flexible/2.5.0/inputs.workbook.json","sha256":"80cd046c81776ccdd99984bae1b7bd18e445dc67ead2da3bd08e6a497de019de","bytes":627417},{"url":"app-configs/workflows/review-gift-kit-flexible/2.5.0/workflow.workflow.json","sha256":"9444bd8b6e2c7bc8090b9bdf0a237f0e079255f3032659a3efc23e39df59a111","bytes":563824},{"url":"app-configs/workflows/street-team-deployment/1.9.0/inputs.mapping.json","sha256":"eca0a7cc8b8251f981b69a6ff41fd3d9e6bd82399459ee7659b8fb0786ae68e7","bytes":17357},{"url":"app-configs/workflows/street-team-deployment/1.9.0/inputs.workbook.json","sha256":"0293e232060d4372e6cebae1493a9aaca223efd9298bc6027fc3f9671b54ccbf","bytes":297958},{"url":"app-configs/workflows/street-team-deployment/1.9.0/workflow.workflow.json","sha256":"d5a6416107d37f446b874e76b8b7d478c3b4a3a9fcb6c6b99e0a9079b5a1cb58","bytes":266850},{"url":"assets/exceljs.min-BcuNHqPt.js","sha256":"86d23866a46c3d1ef6282e6f18beb44d3756dcfe35e03c809e220f43218a98fa","bytes":929558},{"url":"assets/index-Br3wjqax.css","sha256":"f87e24022bc1a7bccb51049b99c62eb2901a1dd85436232d727412406fafb7db","bytes":210501},{"url":"assets/index-D643Jyl9.js","sha256":"e6d3331d6aac668dc0b66e0248c194a4e6ea4e1041de481638bafedf484a766a","bytes":1846120},{"url":"assets/jszip.min-D-TXMPJX.js","sha256":"c48ee1dc6cacecfe99a49e5fda731e7ea187bc07a774bff871eef7b7fe5c1cce","bytes":95949},{"url":"assets/worker-Ewvd5h0q.js","sha256":"6678e36462ce4040fdfe8d616f074ae277cc6ba6f87b85848b1a2da4aaeeec86","bytes":413451},{"url":"icons/apple-touch-icon.png","sha256":"f1c00a658b8624d426cbaad55e657b745199ef44cc53895e903dae3779316406","bytes":3106},{"url":"icons/icon-192.png","sha256":"1e62d29d9408a73290713cdcaf06ccb864a41622c5630003a43329ae63cdd939","bytes":3354},{"url":"icons/icon-512.png","sha256":"1518aa985e9651341244a438940445786422c569054769f47ab3505a26c11e1f","bytes":14155},{"url":"icons/icon.svg","sha256":"4192a9789a88322045befef54019e150d1201a1bf51a43c582688a25b2f509b2","bytes":401},{"url":"icons/maskable-512.png","sha256":"b5d1f90f7e9eed29ad94010dfd7db9ac5079c75c026c17f68556c9ecddd11e43","bytes":9893},{"url":"index.html","sha256":"519c32ca58b7bc04a7354d59a3461926a38c584fe65d28cd4897b62bf6d4cbb0","bytes":1023},{"url":"manifest.webmanifest","sha256":"1de01995f29eab75e2606b8fdb549bd90a1a5e673a397c59619207cb9e30aba8","bytes":760}];
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
