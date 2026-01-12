const CACHE_NAME = 'nova-v1';
// Önbelleğe alınacak dosyalar
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json'
];

// Uygulama yüklenirken dosyaları hafızaya al
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// İnternet olmasa da hafızadaki dosyaları kullan
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
