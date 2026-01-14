// Service Worker para Mukanda PWA
const CACHE_NAME = 'mukanda-v1'
const urlsToCache = [
  '/',
  '/home',
  '/artists',
  '/favorites',
  '/index.html',
  '/src/main.jsx',
  '/src/App.jsx'
]

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto')
        return cache.addAll(urlsToCache)
      })
  )
})

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// Estratégia: Network First, fallback para Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clonar a resposta
        const responseToCache = response.clone()
        
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseToCache)
          })
        
        return response
      })
      .catch(() => {
        return caches.match(event.request)
      })
  )
})

