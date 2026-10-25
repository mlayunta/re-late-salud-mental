/* Re-Late · Service Worker — offline-first del shell.
   Nunca cachea dominios externos (024, 112, OSM, AEPD…): solo archivos propios. */
const VERSION = 'relate-v3';
const CORE = [
  './', './index.html', './offline.html', './manifest.json',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png',
  './icons/maskable-512.png', './icons/apple-touch-icon-180.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then(async (cache) => {
      // addAll falla si falta un PNG: añadimos uno a uno para que la instalación
      // no dependa de que hayas generado ya los iconos.
      await Promise.allSettled(CORE.map((f) => cache.add(f)));
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'RELATE_SKIP') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;      // cero interceptación externa
  if (url.pathname.endsWith('/sw.js')) return;          // no cachear el propio worker

  // Navegación: red primero, y si falla → index.html → offline.html
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copia = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copia));
          return res;
        })
        .catch(async () => {
          const hit = await caches.match(req);
          if (hit) return hit;
          const shell = await caches.match('./index.html');
          return shell || (await caches.match('./offline.html'));
        })
    );
    return;
  }

  // Resto de recursos: stale-while-revalidate
  event.respondWith(
    caches.match(req).then((hit) => {
      const red = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copia = res.clone();
            caches.open(VERSION).then((c) => c.put(req, copia));
          }
          return res;
        })
        .catch(() => hit);
      return hit || red;
    })
  );
});
