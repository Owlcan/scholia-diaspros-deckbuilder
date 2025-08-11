// Service Worker for PWA functionality and aggressive image caching
const CACHE_NAME = 'deckbuilder-v1';
const IMAGE_CACHE_NAME = 'tcg-images-v1';

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
