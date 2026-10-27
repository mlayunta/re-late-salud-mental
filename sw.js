/* Re‑Late · Service Worker · local-first, sin telemetría */
const CACHE='relate-v4';
const CORE=['./','./index.html','./manifest.json','./icons/icon.svg','./icons/favicon-32.png','./icons/apple-touch-icon-180.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys()
 .then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))
 .then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
 const r=e.request;
 if(r.method!=='GET'||!r.url.startsWith(self.location.origin))return;
 e.respondWith(
  caches.match(r).then(hit=>hit||fetch(r).then(res=>{
   if(res.ok)caches.open(CACHE).then(c=>c.put(r,res.clone()));
   return res;}).catch(()=>r.mode==='navigate'?caches.match('./index.html'):Response.error()))
 );});
