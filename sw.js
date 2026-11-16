/* Build substitutes the two constants. This file is otherwise ordinary JS. */
const VERSION = "dd5c720ee0eb0e2bb321";
const ASSETS = [{"url":"app-configs/.nojekyll","sha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","bytes":0},{"url":"app-configs/README.txt","sha256":"688572802be6f8789414243c72a8539d89bcc256787c0aa495f6e208d7e01bf8","bytes":9090},{"url":"app-configs/apps/complete-first-shipment/2/app.app.json","sha256":"1606ac4cdf4308f2aa2d495691d0d1ea3715b1e2f8fffc2c5d0ae12611520f22","bytes":115537},{"url":"app-configs/apps/complete-first-shipment/2/model.yaml","sha256":"3b03f9d45f8836432eee8ad4410fde18cddad3068466efe6fa09f0cd7c97a777","bytes":33749},{"url":"app-configs/apps/plan-marble-delivery/2/app.app.json","sha256":"ca0089ec5005bab8a035005e758abc1530294c6a9c4391cb0e73eed5a8fd1ee5","bytes":78327},{"url":"app-configs/apps/plan-marble-delivery/2/model.yaml","sha256":"087f354f44c8dc0a5eb250e12d872492c635e77571184af878ecf09a9a60a5b8","bytes":21116},{"url":"app-configs/apps/sample-evidence-food/1/app.app.json","sha256":"a1e7581f884dcf2de20d27a553c0d9a49ad638d592534d678eff76449ec5babc","bytes":145623},{"url":"app-configs/apps/sample-evidence-food/1/model.yaml","sha256":"9239d02acdb9866fb3a07ae439ddef6e244dcfdfaa5ca7848b92eb8f035f853c","bytes":50940},{"url":"app-configs/apps/sample-evidence-food/2/app.app.json","sha256":"e90092f1e459f940aee098f64dec0cad0e7733934aa1b007ed2c1798aa8d4710","bytes":161532},{"url":"app-configs/apps/sample-evidence-food/2/model.yaml","sha256":"8264638c3b9082acd584a8047d1a4df64e919c04b7328477a837510121e8e58c","bytes":56598},{"url":"app-configs/apps/sample-evidence-food/3/app.app.json","sha256":"eb50a2dda1ffc818dc2dd01e4aec8063478eb11475484fb437e092052173be3e","bytes":162208},{"url":"app-configs/apps/sample-evidence-food/3/model.yaml","sha256":"7e73da25a4c8a214c71380e06bc5d1dbfc73bf2ed20ece407e1fe7d31fc46811","bytes":56858},{"url":"app-configs/apps/sample-evidence-food/4/app.app.json","sha256":"2b3de764d67d92631fcd2cfd49cbab626b3e7a5b197d1cba69e6b864e70af389","bytes":162212},{"url":"app-configs/apps/sample-evidence-food/4/model.yaml","sha256":"00e639bfc1dbfdde477600eb3a3f2970a496377f298d0f718f75226abe80ac46","bytes":56860},{"url":"app-configs/apps/sample-evidence-marbles/1/app.app.json","sha256":"619cc770321f9a52becf3de6b0c9f5160d488b959f302f282c97b3330f30d24e","bytes":36913},{"url":"app-configs/apps/sample-evidence-marbles/1/model.yaml","sha256":"1aa484f7f656a16829b02499acf425bc2335bf7eb7f4ae1c3bb4be541d4f20c9","bytes":11264},{"url":"app-configs/apps/sample-evidence-marbles/2/app.app.json","sha256":"02ba6ad0c3a22f67114b1a58b803b26de5b4da172e215b469abfb2229e5e32f5","bytes":39080},{"url":"app-configs/apps/sample-evidence-marbles/2/model.yaml","sha256":"f6b320d563acdf2e8d5df9c30a2ee6d13ac46c1b3309c729b7f03f6ab09e6429","bytes":12143},{"url":"app-configs/apps/sample-evidence-network/1/app.app.json","sha256":"838181878ce139fe96ae84636c96988b2c8c7b26af7873e3bcd6275e8224c519","bytes":101734},{"url":"app-configs/apps/sample-evidence-network/1/model.yaml","sha256":"477bac5151ad77dc8f496ebb80c7463a8d5635684cb01fa13f95a4cf61fdd617","bytes":35095},{"url":"app-configs/apps/sample-evidence-network/2/app.app.json","sha256":"bfece9974cef5b0ca62c24b2e4f413b33dc216d2d81c7e5f8e420ce5afc91cec","bytes":132678},{"url":"app-configs/apps/sample-evidence-network/2/model.yaml","sha256":"7c94cca5a32f0bddc773ffd29fd5533199b051f777fd9c935d653ab127685b39","bytes":46113},{"url":"app-configs/apps/sample-evidence-network/3/app.app.json","sha256":"9f4a1bb7ee38e7614290ab72421412072a1d430a6e4b6ce2b722c7cfb8565d8d","bytes":133944},{"url":"app-configs/apps/sample-evidence-network/3/model.yaml","sha256":"1c7227653608d29b235d2051658894f27f9c00c9d26b57db9f240225521b37e6","bytes":46654},{"url":"app-configs/apps/sample-evidence-network/4/app.app.json","sha256":"cd415edbdbadd914881944487a5aa9f6846b7ad7ce53be4e45f1b42ea8c2ef25","bytes":133952},{"url":"app-configs/apps/sample-evidence-network/4/model.yaml","sha256":"f4b2b250d6de7935b4a18fa3ed33374224232c6bcff98baddc3a96a8f904a3bd","bytes":46658},{"url":"app-configs/apps/sample-learning-launch/1/app.app.json","sha256":"e432f3b9db003a87f63f8a6d19d13ba8ebc626af0813b945198f698ce8b09e5a","bytes":98035},{"url":"app-configs/apps/sample-learning-launch/1/model.yaml","sha256":"6fa210a55f5203195a79eb391349b20950bc839bae0c9d96692dcfe6b9d075f3","bytes":36897},{"url":"app-configs/apps/sample-learning-launch/2/app.app.json","sha256":"e33947a895ab6ebe1a69843555ab48516bfc2b1820cec4b88484c8e460c20a5e","bytes":103878},{"url":"app-configs/apps/sample-learning-launch/2/model.yaml","sha256":"98b5f722a35ebf2bb2c5a62f04b8708657acd5f37dab07359549bc48719f7c84","bytes":39286},{"url":"app-configs/apps/sample-learning-launch/3/app.app.json","sha256":"376c4e3ea100284398d2aaa620b87033d870e13d6a74e96438afc2b1c50a17d5","bytes":114080},{"url":"app-configs/apps/sample-learning-launch/3/model.yaml","sha256":"3969938c1f1b53e327bb6758ec77158b1f2319f7acbdcd6aeb997d5aaba8cb65","bytes":43523},{"url":"app-configs/apps/sample-learning-launch/4/app.app.json","sha256":"1b2430723592f73eb0fe88072ffceac4989ba6a2bb56f7bde72fa1cc62b1df72","bytes":114076},{"url":"app-configs/apps/sample-learning-launch/4/model.yaml","sha256":"6631d017d17ef9bc1f7d7d1aecdd28fe2dfc7381ecd09f1ade8342944bda768f","bytes":43521},{"url":"app-configs/apps/sample-learning-marbles/1/app.app.json","sha256":"41d588338a5efe23a1afab7936b6dc67890d36f93588fde486e8c07e925f7e7c","bytes":49674},{"url":"app-configs/apps/sample-learning-marbles/1/model.yaml","sha256":"623e2b6d68e05789f39f770e7d868beef40cb6cb4115a560e34bac9aeb21471b","bytes":17579},{"url":"app-configs/apps/sample-learning-marbles/2/app.app.json","sha256":"a5fe75a0908c64a7c41848d1615d6479219bb34b7ec21467308ba120f8ab1da2","bytes":54835},{"url":"app-configs/apps/sample-learning-marbles/2/model.yaml","sha256":"752bf7eaf7613bd111ebc0609e534d28077eddf3c63b48009e5549ea1dac8e7b","bytes":19689},{"url":"app-configs/apps/sample-learning-marbles/3/app.app.json","sha256":"63f47574452b642f449640edcba27a1143361fd0fc63112f847781f796250be3","bytes":58932},{"url":"app-configs/apps/sample-learning-marbles/3/model.yaml","sha256":"324ddf1b5d95a31772045e04f0c4c66e163a87c218eedf7611ec3ed7d5d5aa31","bytes":21413},{"url":"app-configs/apps/sample-learning-marbles/4/app.app.json","sha256":"8fe02ac3d3a9c8fcca020e27cb20cbc124d42573c2fc3a8a9c8d4838e377abfb","bytes":58928},{"url":"app-configs/apps/sample-learning-marbles/4/model.yaml","sha256":"b9f4e2cf9e7d3628dfd3c7efb22f79e8bf4710e84cce9f8c78aabac356f9e7f8","bytes":21411},{"url":"app-configs/catalog.json","sha256":"4f646acf3ee92bdc61527b87f9abeb03e33a93fc7cb3fc07019bd4f2e2a15567","bytes":42181},{"url":"app-configs/generate-feed.mjs","sha256":"6d0e29be8f8f255fc49184681d4743d62dfc3c38c5ccc5b70a672c3b3edd2638","bytes":4959},{"url":"assets/clingo-Bbt-XjUT.js","sha256":"72b43fcd93ac10271a9ca08d30ea2b1f0f6f0f79ac6afd98cc442ae5fe1010ba","bytes":43562},{"url":"assets/clingo-XXkjrXyN.wasm","sha256":"dbda5b75289dd891d6af8d97de841654ed1fdaa2eeaf255c9f454292b383822c","bytes":2641024},{"url":"assets/clingo-mt-BQXxwGhz.wasm","sha256":"c7ef7c3e9d797bab0bf3c458c03dc20bba1b86ebbfd48d041f65570bcb396915","bytes":2683079},{"url":"assets/clingo-mt-C09myPg8.js","sha256":"90fd230f67ba2e2246e49ca39fdfc2bfeebb1a04f1a794365e787ae72796e8ed","bytes":50876},{"url":"assets/clingo-mt-DhjtsTao.js","sha256":"120682d2abc14b4dd994baf560968b9cc1469d6ce123bd7c61996294d44346db","bytes":50792},{"url":"assets/index-6XWLp_rm.css","sha256":"a538488867bb1a8401c25ec88d805730da7943ef7e504769fba68ca993b255de","bytes":206114},{"url":"assets/index-_u3gmj4Y.js","sha256":"b7fd9470bda660f9a9295e5a018e0b4fd89e0d4e78fc2c9a1ffb3965cfbe83fc","bytes":6525532},{"url":"assets/run.worker-Dcf80R0t.js","sha256":"dd9fdddeabd56d071071bc5c66328b7fd587f8db619e5b01b7c2a1104c1c6cd4","bytes":2360},{"url":"assets/worker-vx7WVNNu.js","sha256":"83a590c64ccc9e6bf919de1fb03d51eb9d5fe8567564d212e76f84958b4b8eeb","bytes":346062},{"url":"icons/apple-touch-icon.png","sha256":"f1c00a658b8624d426cbaad55e657b745199ef44cc53895e903dae3779316406","bytes":3106},{"url":"icons/icon-192.png","sha256":"1e62d29d9408a73290713cdcaf06ccb864a41622c5630003a43329ae63cdd939","bytes":3354},{"url":"icons/icon-512.png","sha256":"1518aa985e9651341244a438940445786422c569054769f47ab3505a26c11e1f","bytes":14155},{"url":"icons/icon.svg","sha256":"4192a9789a88322045befef54019e150d1201a1bf51a43c582688a25b2f509b2","bytes":401},{"url":"icons/maskable-512.png","sha256":"b5d1f90f7e9eed29ad94010dfd7db9ac5079c75c026c17f68556c9ecddd11e43","bytes":9893},{"url":"index.html","sha256":"72c5687bb25c06a877bd39728835cb346842311c6782815b3a6e7d1e5243ee61","bytes":1023},{"url":"manifest.webmanifest","sha256":"1de01995f29eab75e2606b8fdb549bd90a1a5e673a397c59619207cb9e30aba8","bytes":760}];
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
