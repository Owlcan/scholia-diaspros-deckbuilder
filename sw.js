// Service Worker for PWA functionality and aggressive image caching
const CACHE_VERSION = 'v2';
const CACHE_NAME = `deckbuilder-${CACHE_VERSION}`;
const IMAGE_CACHE_NAME = `tcg-images-${CACHE_VERSION}`;

// Core files to cache for offline functionality
const CORE_FILES = [
    './',
    './index.html',
    './TCG-cards.js',
    './manifest.json',
    './sw.js'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching core files');
            return cache.addAll(CORE_FILES);
        })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - handle both core files and images
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    // Always fetch latest HTML for navigations; fall back to cache when offline
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then((resp) => {
                    // cache a copy of the latest index for offline use
                    const copy = resp.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy)).catch(() => {});
                    return resp;
                })
                .catch(() => caches.match('./index.html', { ignoreSearch: true }))
        );
        return;
    }
    
    // Handle image requests with aggressive caching
    if (url.pathname.includes('/src/assets/images/') && 
        (url.pathname.endsWith('.webp') || url.pathname.endsWith('.png') || 
         url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg'))) {
        
        event.respondWith(
            caches.open(IMAGE_CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        console.log('Serving image from cache:', url.pathname);
                        return cachedResponse;
                    }
                    
                    console.log('Fetching and caching image:', url.pathname);
                    return fetch(event.request).then((response) => {
                        const responseClone = response.clone();
                        
                        const headers = new Headers(responseClone.headers);
                        headers.set('Cache-Control', 'max-age=31536000, immutable');
                        headers.set('Expires', 'Wed, 31 Dec 2025 23:59:59 GMT');
                        
                        const cachedResponse = new Response(responseClone.body, {
                            status: responseClone.status,
                            statusText: responseClone.statusText,
                            headers: headers
                        });
                        
                        cache.put(event.request, cachedResponse);
                        return response;
                    }).catch((error) => {
                        console.error('Failed to fetch image:', url.pathname, error);
                        throw error;
                    });
                });
            })
        );
    }
    // Handle core app files
    else if (CORE_FILES.some(file => url.pathname.endsWith(file.replace('./', '')))) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    }
});

// Allow the app to explicitly prefetch specific images (designated card art)
self.addEventListener('message', (event) => {
    const data = event.data || {};
    if (data.type === 'prefetch-images' && Array.isArray(data.urls)) {
        event.waitUntil((async () => {
            const cache = await caches.open(IMAGE_CACHE_NAME);
            await Promise.all(
                data.urls.map(async (u) => {
                    try {
                        const req = new Request(u);
                        const existing = await cache.match(req);
                        if (existing) return; // already cached
                        const resp = await fetch(req);
                        if (resp && (resp.ok || resp.type === 'opaque')) {
                            await cache.put(req, resp.clone());
                        }
                    } catch (e) {
                        // swallow prefetch errors; they are best-effort
                        console.warn('Prefetch failed for', u, e);
                    }
                })
            );
        })());
    }
});
