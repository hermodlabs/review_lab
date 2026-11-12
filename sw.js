/* Build substitutes the two constants. This file is otherwise ordinary JS. */
const VERSION = "9a19a4e6bd3147690c5d";
const ASSETS = [{"url":"assets/clingo-Bbt-XjUT.js","sha256":"72b43fcd93ac10271a9ca08d30ea2b1f0f6f0f79ac6afd98cc442ae5fe1010ba","bytes":43562},{"url":"assets/clingo-XXkjrXyN.wasm","sha256":"dbda5b75289dd891d6af8d97de841654ed1fdaa2eeaf255c9f454292b383822c","bytes":2641024},{"url":"assets/clingo-mt-BQXxwGhz.wasm","sha256":"c7ef7c3e9d797bab0bf3c458c03dc20bba1b86ebbfd48d041f65570bcb396915","bytes":2683079},{"url":"assets/clingo-mt-C09myPg8.js","sha256":"90fd230f67ba2e2246e49ca39fdfc2bfeebb1a04f1a794365e787ae72796e8ed","bytes":50876},{"url":"assets/clingo-mt-DhjtsTao.js","sha256":"120682d2abc14b4dd994baf560968b9cc1469d6ce123bd7c61996294d44346db","bytes":50792},{"url":"assets/index-DV4hFSrA.css","sha256":"1fec22a18d9e0bc2aab940d8f36332f6a9823e0e327085a36c4350e43f455bd8","bytes":205328},{"url":"assets/index-Dcs2KR43.js","sha256":"76bae7cbfa7a7c718e6a1d6b666ce25d1b5620cac9f506aa8520d501d2227321","bytes":5929285},{"url":"assets/lib-d6bElRJs.js","sha256":"20aaa98c1c714e5c3c6c4df70e522de6ca21236cf3711f8a7789cce37efeb7fb","bytes":6115340},{"url":"assets/mammoth.browser-DdXS3Ul8.js","sha256":"a7cd8f22cedc7afd20fc17ee062afbf03181ab2cb39f849c952fec293149da2f","bytes":298602},{"url":"assets/pdf-8ZV14wDg.js","sha256":"2b65d53fa8ab8b72839fd8eb449c0ebfc7bf83dd70a86738111e2bfad875109d","bytes":444979},{"url":"assets/pdf.worker.min-BroKtp1e.js","sha256":"89a16be362187569309b1d862f20592db26f8ab728709d752d341ad01012fa3f","bytes":86},{"url":"assets/pdf.worker.min-CKukk4ye.js","sha256":"b841605e5678db1f90ed29e684c0aed7ba9f69589bd4f29eb5b1a1ec4407069f","bytes":1179715},{"url":"assets/run.worker-Dcf80R0t.js","sha256":"dd9fdddeabd56d071071bc5c66328b7fd587f8db619e5b01b7c2a1104c1c6cd4","bytes":2360},{"url":"assets/webllm.worker-CnuuuAu-.js","sha256":"1eec30685513e0ab8018baae64db7137e4444cd0ed6d7a1bcea374c7b3da795f","bytes":2668171},{"url":"icons/apple-touch-icon.png","sha256":"f1c00a658b8624d426cbaad55e657b745199ef44cc53895e903dae3779316406","bytes":3106},{"url":"icons/icon-192.png","sha256":"1e62d29d9408a73290713cdcaf06ccb864a41622c5630003a43329ae63cdd939","bytes":3354},{"url":"icons/icon-512.png","sha256":"1518aa985e9651341244a438940445786422c569054769f47ab3505a26c11e1f","bytes":14155},{"url":"icons/icon.svg","sha256":"4192a9789a88322045befef54019e150d1201a1bf51a43c582688a25b2f509b2","bytes":401},{"url":"icons/maskable-512.png","sha256":"b5d1f90f7e9eed29ad94010dfd7db9ac5079c75c026c17f68556c9ecddd11e43","bytes":9893},{"url":"index.html","sha256":"9c334c044bf90f3733f7fd12703d48f6cbf3ea1cf8ecde5cc569463333843fb0","bytes":1023},{"url":"manifest.webmanifest","sha256":"1de01995f29eab75e2606b8fdb549bd90a1a5e673a397c59619207cb9e30aba8","bytes":760}];
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
