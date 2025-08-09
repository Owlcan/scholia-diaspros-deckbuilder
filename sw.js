// Service Worker for aggressive image caching
const CACHE_NAME = 'tcg-images-v1';

// Install event - cache critical resources
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - intercept requests and cache images aggressively
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Only handle image requests from our assets folder
    if (url.pathname.includes('/src/assets/images/') && 
        (url.pathname.endsWith('.webp') || url.pathname.endsWith('.png') || 
         url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg'))) {
        
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        console.log('Serving from cache:', url.pathname);
                        return cachedResponse;
                    }
                    
                    console.log('Fetching and caching:', url.pathname);
                    return fetch(event.request).then((response) => {
                        // Clone the response before caching
                        const responseClone = response.clone();
                        
                        // Add aggressive cache headers
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
});
