// Install event - Cache files
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-cache").then(cache => {
            return cache.addAll([
                "/", 
                "/index.html", 
                "/style.css",
                "/images/logo.png",
                "/manifest.json"
            ]);
        })
    );
});

// Fetch event - Serve cached files
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
