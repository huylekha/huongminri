/**
 * HuongMinri Service Worker
 * Caching strategy for better performance
 */

const CACHE_NAME = 'huongminri-v1.0.0';
const STATIC_CACHE = 'huongminri-static-v1';
const RUNTIME_CACHE = 'huongminri-runtime-v1';

// Cache static assets
const STATIC_ASSETS = [
  '/',
  '/vi/',
  '/en/',
  '/favicon.svg',
  '/logo.svg',
  '/og.svg',
  '/robots.txt',
];

// Cache fonts and external resources
const EXTERNAL_RESOURCES = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap',
  'https://fonts.gstatic.com/',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('📦 Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker activated');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== RUNTIME_CACHE) {
              console.log('🗑️ Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with fallback strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-HTTP requests
  if (!url.protocol.startsWith('http')) return;

  // Skip analytics and tracking requests
  if (url.hostname.includes('google-analytics.com') || 
      url.hostname.includes('googletagmanager.com') ||
      url.hostname.includes('facebook.net')) {
    return;
  }

  // Handle different request types
  if (request.destination === 'document') {
    // HTML pages - Stale While Revalidate
    event.respondWith(handleDocumentRequest(request));
  } else if (request.destination === 'image') {
    // Images - Cache First
    event.respondWith(handleImageRequest(request));
  } else if (request.destination === 'style' || request.destination === 'font') {
    // CSS and Fonts - Cache First
    event.respondWith(handleStaticRequest(request));
  } else if (request.destination === 'script') {
    // JavaScript - Network First (for analytics)
    event.respondWith(handleScriptRequest(request));
  }
});

// Document request handler (HTML)
async function handleDocumentRequest(request) {
  try {
    // Try network first for fresh content
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful response
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    
    throw new Error('Network response not ok');
  } catch (error) {
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Ultimate fallback to offline page
    return caches.match('/offline.html') || new Response('Page not available offline', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Image request handler
async function handleImageRequest(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Image fetch failed:', error);
    // Return placeholder or empty response
    return new Response('', { status: 404 });
  }
}

// Static assets handler (CSS, fonts)
async function handleStaticRequest(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Static asset fetch failed:', error);
    return new Response('', { status: 404 });
  }
}

// Script request handler
async function handleScriptRequest(request) {
  try {
    // Always try network first for scripts (analytics, etc.)
    return await fetch(request);
  } catch (error) {
    // Fallback to cache for critical scripts
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('', { status: 404 });
  }
}

// Background sync for failed requests (if supported)
if ('sync' in self.registration) {
  self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync-analytics') {
      event.waitUntil(syncAnalytics());
    }
  });
}

async function syncAnalytics() {
  console.log('🔄 Syncing analytics data...');
  // Handle any queued analytics data when connection returns
}