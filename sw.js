/* // TODO_ — Service Worker
   Basit "cache-first" strateji. Alt klasörde (/to-do/) çalışacak şekilde
   tüm yollar GÖRELİ olarak ("./") register edildiği scope'a göre çözülür. */

const CACHE = 'todo-cache-v2';

// Register scope'una göre çözülen göreli çekirdek dosyalar.
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

// Kurulum: çekirdek dosyaları önbelleğe al (tek tek, biri başarısız olsa da devam et).
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.allSettled(CORE_ASSETS.map((url) => cache.add(url)))
    ).then(() => self.skipWaiting())
  );
});

// Etkinleşme: eski sürüm önbelleklerini temizle.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// İstekler: sadece GET. Önce önbellek, yoksa ağdan getir ve önbelleğe koy.
// Ağ da yoksa ve gezinme (navigation) isteğiyse index.html'e düş.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.ok && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => {
          if (req.mode === 'navigate') return caches.match('./index.html');
        });
    })
  );
});
