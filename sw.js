// โค้ดพื้นฐานสำหรับให้ระบบมองว่าเป็น PWA
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (event) => {
    // โค้ดสำหรับดึงข้อมูลปกติ (ดึงจากเว็บโดยตรง)
    event.respondWith(fetch(event.request));
});