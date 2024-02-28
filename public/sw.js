const CACHE_NAME = 'my-pwa-cache-v6';

const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js'
];

self.addEventListener('install', event => {
  // 安装阶段，缓存静态资源
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  console.log(11);
  // 激活阶段，清理旧缓存
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== cacheName) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  // 拦截网络请求，优先从缓存中获取
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
