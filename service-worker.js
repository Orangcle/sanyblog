/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0d0f253c9e89fa7e9e4fb2b7d224e944"
  },
  {
    "url": "assets/css/0.styles.03bec5b0.css",
    "revision": "57621d901fff06c37f61d9566e319cea"
  },
  {
    "url": "assets/img/award.6f790468.png",
    "revision": "6f790468369c4a20f2acd35bae1342a6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.40b9bf53.js",
    "revision": "f1c5ae274d9b66fa263748dd750f56aa"
  },
  {
    "url": "assets/js/11.b1f8a798.js",
    "revision": "e82ddf17e6f18388e41c6a84c9c7bf7e"
  },
  {
    "url": "assets/js/12.c6cd4c55.js",
    "revision": "37159f7be9ad9d42316342a7599a8006"
  },
  {
    "url": "assets/js/13.fb9cb494.js",
    "revision": "2976680927f8a353593bc4f4e49afe6e"
  },
  {
    "url": "assets/js/14.12b26966.js",
    "revision": "e4fe0cd5355596e7335ce10aba0152c3"
  },
  {
    "url": "assets/js/15.0ecfe715.js",
    "revision": "dbae81c279030a03d3663915b8876fac"
  },
  {
    "url": "assets/js/16.7db44b09.js",
    "revision": "f8670d578222ccffb89b1cca7a06fec2"
  },
  {
    "url": "assets/js/17.c4994ad5.js",
    "revision": "4b16518b8826da54f3f1d8a915d5dd44"
  },
  {
    "url": "assets/js/18.d6b87e70.js",
    "revision": "7498b32362812fb0457098d26de52bcc"
  },
  {
    "url": "assets/js/19.a9f4a29c.js",
    "revision": "6528491a21a3b5c389ec36a211c6e373"
  },
  {
    "url": "assets/js/2.dc8edc5b.js",
    "revision": "879420ef74c192aec1bc8f27d03a6d34"
  },
  {
    "url": "assets/js/20.5f7fec2d.js",
    "revision": "815c74b0c7228389f750d59b0e193dbf"
  },
  {
    "url": "assets/js/21.31e81ca7.js",
    "revision": "57f03a6ea96e2c85527a48c047bb061f"
  },
  {
    "url": "assets/js/22.8ce0d23e.js",
    "revision": "3ea393f5e88655075fedff466b9822f2"
  },
  {
    "url": "assets/js/23.8eca7541.js",
    "revision": "08a242a4bbf2cfe733b9902bb5ea1cce"
  },
  {
    "url": "assets/js/24.c57c0628.js",
    "revision": "f82796eb13d4946772e0465d71e7a569"
  },
  {
    "url": "assets/js/25.71cae551.js",
    "revision": "f39c1b7eda0d3073fcc6745a145f5c19"
  },
  {
    "url": "assets/js/26.5fe6971f.js",
    "revision": "201205d5abbb23aa5f649c09cb214d4a"
  },
  {
    "url": "assets/js/27.582b141f.js",
    "revision": "7ff1913ff6159ce6ef0760776c496290"
  },
  {
    "url": "assets/js/28.90258d65.js",
    "revision": "e6989c7ce02c1e7ea8f9536e0222299b"
  },
  {
    "url": "assets/js/3.2713077a.js",
    "revision": "beee9a785f2507fa6ea32e3d97c335b5"
  },
  {
    "url": "assets/js/4.55c641f2.js",
    "revision": "71a4923e444b8284d4e14d0194e38d87"
  },
  {
    "url": "assets/js/5.29d4f857.js",
    "revision": "384b12d8f9f2e776ba5a7491ff2eac7d"
  },
  {
    "url": "assets/js/6.510ae4e5.js",
    "revision": "3ae035150224982bee958a25925ee63d"
  },
  {
    "url": "assets/js/7.3763502d.js",
    "revision": "3d5c4a780937fda852d9950a34239697"
  },
  {
    "url": "assets/js/8.d709a7fd.js",
    "revision": "cad4558f91eea6f2efe9c9fba37e1b49"
  },
  {
    "url": "assets/js/9.9288a7ba.js",
    "revision": "8b58550a16dd3c2b6a98db7b1f37310f"
  },
  {
    "url": "assets/js/app.f15d379a.js",
    "revision": "4ef7d0c70a296fcdaadbaa4f1dba95b1"
  },
  {
    "url": "award.png",
    "revision": "6f790468369c4a20f2acd35bae1342a6"
  },
  {
    "url": "guide/about/index.html",
    "revision": "87dc9191d839659553e58493704010d8"
  },
  {
    "url": "guide/book/b-001.html",
    "revision": "0666da8682d9bf5c4cc3e3c597e303f6"
  },
  {
    "url": "guide/book/b-002.html",
    "revision": "49fdb4d970832089015b03faa6899c2c"
  },
  {
    "url": "guide/book/b-003.html",
    "revision": "5424706ef10a8e844b17c20d0e115192"
  },
  {
    "url": "guide/book/b-004.html",
    "revision": "1cc79f167e18985bff10f34296ca765d"
  },
  {
    "url": "guide/book/index.html",
    "revision": "100dcdb35ec743426eeb5365d933fd16"
  },
  {
    "url": "guide/diary/d-001.html",
    "revision": "f761c7372340cf92e3be02482efdd08d"
  },
  {
    "url": "guide/diary/d-002.html",
    "revision": "04546da38b050ded27eb36ea4718e609"
  },
  {
    "url": "guide/diary/d-003.html",
    "revision": "475524f449fd30f1083d15bb279b4dd9"
  },
  {
    "url": "guide/diary/d-004.html",
    "revision": "283e90a13ef7b01e0c63f2015ae341b8"
  },
  {
    "url": "guide/diary/index.html",
    "revision": "b1a769faad65edcc09cf2b899884bca8"
  },
  {
    "url": "guide/front/f-001.html",
    "revision": "bf0b02f6b2720757f5dfcaaba84137e2"
  },
  {
    "url": "guide/front/f-002.html",
    "revision": "76d151349a8781cb4152c632abdb1658"
  },
  {
    "url": "guide/front/f-003.html",
    "revision": "b13f894130cf4d2a5073b4c99cc2e1ac"
  },
  {
    "url": "guide/front/f-004.html",
    "revision": "e9b3289305e9a4c11e06907524776bcc"
  },
  {
    "url": "guide/front/index.html",
    "revision": "e6bc198af7e5069187333b6b1dca3d9d"
  },
  {
    "url": "guide/photo/index.html",
    "revision": "29b81a0ae2c1e6ae6562a613a1c07947"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "2d2f65cf3358af08d5d533f7a58d30d1"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "e229025f5dadcc239b6a47216908b5f4"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "a26469f3adc98e54e8105247d22b1e53"
  },
  {
    "url": "index.html",
    "revision": "a7e78c7c62237e56bab7659f7f266239"
  },
  {
    "url": "logo.png",
    "revision": "e725247c4bfac4263a399a10de38b4eb"
  },
  {
    "url": "logo288.png",
    "revision": "6e99afae0b8f15605edc37a3d3fa2056"
  },
  {
    "url": "logo52.png",
    "revision": "b57b3b2a0c610249e6d98d933cd45a67"
  },
  {
    "url": "sanyblog.png",
    "revision": "876b74396a20f75246f84178c14d8873"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
