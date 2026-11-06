/* Re-Late · Service Worker · local-first, sin telemetría */
const VERSION='relate-v6';
const CORE=['./','./index.html','./app.js','./offline.html','./manifest.json','./icons/icon.svg','./icons/favicon-32.png','./icons/apple-touch-icon-180.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys()
    .then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim()));
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==location.origin)return; /* no interceptar terceros */
  if(req.mode==='navigate'){
    e.respondWith(fetch(req)
      .then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(req,cp));return r;})
      .catch(()=>caches.match(req).then(r=>r||caches.match('./offline.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(r=>{
    if(r&&r.status===200&&r.type==='basic'){const cp=r.clone();caches.open(VERSION).then(c=>c.put(req,cp));}
    return r;
  }).catch(()=>caches.match('./offline.html'))));
});

self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING')self.skipWaiting();});