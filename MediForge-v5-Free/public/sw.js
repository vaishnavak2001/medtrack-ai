// Service worker for offline caching
// VitePWA generates its own SW via Workbox, but this serves as a fallback
const CACHE_NAME = 'mediforge-v5-v2';
const BASE = '/medtrack-ai/';

const urlsToCache = [
    BASE,
    `${BASE}index.html`,
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .catch(err => console.warn('Cache failed:', err))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
