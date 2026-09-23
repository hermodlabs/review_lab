/* Build substitutes the two constants. This file is otherwise ordinary JS. */
const VERSION = "cdae4d4bd05290091e2c";
const ASSETS = [{"url":"assets/analyze-Daxn61Op.js","sha256":"9639627224582a9be1f324a66cbaeb2d7615b9931e10b27e1729c539d03c4936","bytes":2619597},{"url":"assets/clingo-Bbt-XjUT.js","sha256":"72b43fcd93ac10271a9ca08d30ea2b1f0f6f0f79ac6afd98cc442ae5fe1010ba","bytes":43562},{"url":"assets/clingo-XXkjrXyN.wasm","sha256":"dbda5b75289dd891d6af8d97de841654ed1fdaa2eeaf255c9f454292b383822c","bytes":2641024},{"url":"assets/clingo-mt-BQXxwGhz.wasm","sha256":"c7ef7c3e9d797bab0bf3c458c03dc20bba1b86ebbfd48d041f65570bcb396915","bytes":2683079},{"url":"assets/clingo-mt-C09myPg8.js","sha256":"90fd230f67ba2e2246e49ca39fdfc2bfeebb1a04f1a794365e787ae72796e8ed","bytes":50876},{"url":"assets/clingo-mt-DhjtsTao.js","sha256":"120682d2abc14b4dd994baf560968b9cc1469d6ce123bd7c61996294d44346db","bytes":50792},{"url":"assets/index-BXuqSGlK.css","sha256":"2612ee992f625c32085e21c4b3708c5e79bc606118acf78b732d000895626a05","bytes":79235},{"url":"assets/index-DMy9sjmE.js","sha256":"fa129c6d54897c5f182d0b01873b1d628bd5c87c6a081565ee26f83c03792526","bytes":1755153},{"url":"assets/run.worker-Dcf80R0t.js","sha256":"dd9fdddeabd56d071071bc5c66328b7fd587f8db619e5b01b7c2a1104c1c6cd4","bytes":2360},{"url":"assets/solver-DYEyJ8wB.js","sha256":"e1fe1d917bdb81632e9ebd9bedf37e27b54f39dfc5209128f870255c48209afa","bytes":4744},{"url":"icons/apple-touch-icon.png","sha256":"f1c00a658b8624d426cbaad55e657b745199ef44cc53895e903dae3779316406","bytes":3106},{"url":"icons/icon-192.png","sha256":"1e62d29d9408a73290713cdcaf06ccb864a41622c5630003a43329ae63cdd939","bytes":3354},{"url":"icons/icon-512.png","sha256":"1518aa985e9651341244a438940445786422c569054769f47ab3505a26c11e1f","bytes":14155},{"url":"icons/icon.svg","sha256":"4192a9789a88322045befef54019e150d1201a1bf51a43c582688a25b2f509b2","bytes":401},{"url":"icons/maskable-512.png","sha256":"b5d1f90f7e9eed29ad94010dfd7db9ac5079c75c026c17f68556c9ecddd11e43","bytes":9893},{"url":"index.html","sha256":"69ca515c4302241da3d54a954e5b96c5f309e173c16ccc991ae772494c982054","bytes":791},{"url":"manifest.webmanifest","sha256":"bb66b7cebb3992c7b329f1af410f0da36ce0c48a957e01d978536c7acbec2321","bytes":757}];
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
