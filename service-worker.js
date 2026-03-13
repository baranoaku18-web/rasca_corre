const CACHE = "raspa-cache-v1";

const archivos = [
"/",
"/index.html",
"/main.js",
"/canvas.css"
];

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE).then(cache => cache.addAll(archivos))
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request).then(res => res || fetch(event.request))
);
});