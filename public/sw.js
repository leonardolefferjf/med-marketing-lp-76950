// Service Worker para cache estratégico
const CACHE_NAME = 'artigoai-v1';
const STATIC_RESOURCES = [
  '/',
  '/src/assets/logo-artigo-ai.png',
  '/src/assets/index.css',
  '/src/assets/index.js'
];

// Cache estratégico - cache first para assets, network first para HTML
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cache para requests de API
  if (url.pathname.includes('/webhook/') || url.hostname.includes('hotmart.com')) {
    return;
  }

  // Cache first para assets estáticos
  if (request.destination === 'image' || request.destination === 'script' || request.destination === 'style') {
    event.respondWith(
      caches.match(request).then(response => {
        if (response) return response;
        
        return fetch(request).then(response => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
  }
});

// Instalar SW e pré-cache recursos críticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_RESOURCES);
    })
  );
});

// Limpar caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});