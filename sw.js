self.addEventListener('install', (event) => {
    console.log('[Service Worker] 설치됨');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    console.log('[Service Worker] 활성화됨');
  });
  
  self.addEventListener('fetch', (event) => {
    // 네트워크 요청을 그냥 통과시킴 (캐시 미사용)
    return;
  });
  