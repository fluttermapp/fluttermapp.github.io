'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "27a9c9de95d1acceef545f52d2a7393d",
"favicon.ico": "7bc69a4195a9b7cf9ad117e515fdc0d4",
"index.html": "73f92151f2b1b02b031221f1a3d2cfc8",
"/": "73f92151f2b1b02b031221f1a3d2cfc8",
"main.dart.js": "9402beeee5ab74300401ecb973feed24",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192%20copy.png": "644d68da75a6ad6ee84d4895b123a022",
"icons/Icon-maskable-192%20copy.png": "644d68da75a6ad6ee84d4895b123a022",
"icons/Icon-192.png": "644d68da75a6ad6ee84d4895b123a022",
"icons/Icon-512%20copy.png": "87d63c8871f3e41f780637ef147970d5",
"icons/Icon-maskable-192.png": "644d68da75a6ad6ee84d4895b123a022",
"icons/Icon-maskable-512%20copy.png": "87d63c8871f3e41f780637ef147970d5",
"icons/Icon-maskable-512.png": "87d63c8871f3e41f780637ef147970d5",
"icons/Icon-512.png": "87d63c8871f3e41f780637ef147970d5",
"manifest.json": "e6b91ee2f47a924de52f0cf5b82139d0",
"assets/AssetManifest.json": "6c53ac5b6a7a1ba0544734ae79594958",
"assets/NOTICES": "b3e32aea3d9b1b92eb55dc13ece83273",
"assets/FontManifest.json": "81ada5112a501de56df6b069c8f36da4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/work.png": "13a9bc0dbe60f570a4e448df30b1302b",
"assets/assets/images/banner.jpeg": "dc2b9b0df2a4c1d3033d16c5a970c290",
"assets/assets/images/bitcoin.png": "bfae225990b179a12229cf341740eca4",
"assets/assets/images/website.png": "17e4af7e9b64e95ad7ea9b101aa30665",
"assets/assets/images/fire.png": "b18ce6d9e636217789bf3476f8bcf57b",
"assets/assets/images/flutter_mapp_logo.jpeg": "94f52360e74c59e0bcadca971adbb8d0",
"assets/assets/images/tadas.webp": "412d175ecc94dd656ca42082babcfc45",
"assets/assets/images/ethereum.png": "38a3677348423333d9e76cd6433ce5cd",
"assets/assets/images/house.png": "d124ba5a2c7d9cb2f7f9bdfacc010500",
"assets/assets/images/flutter_ca.jpg": "b0c83748da10b2ce1a82ac80e69cc108",
"assets/assets/images/beginner_course.jpg": "f573588b6f0dfd8ddb10ba215ab246d7",
"assets/assets/images/beginner_app/get.png": "2e49fd31995c7148a710a2bcffa97514",
"assets/assets/images/beginner_app/cactus.png": "2ebe9879f8cc826318be68f32947097d",
"assets/assets/images/beginner_app/rock.png": "8864c1c917b4ae3acb68cde64ae9d53a",
"assets/assets/images/beginner_app/rocket.png": "a3a3feb77e1b65efa6beb5fc6b94c157",
"assets/assets/images/beginner_app/yeah.png": "f4493efc36573be4efc7f6150a2a88cc",
"assets/assets/images/beginner_app/send.png": "cf8b21abbfee28e9ac4c6ffda053b410",
"assets/assets/images/beginner_app/bag.png": "32d20f4253beb9ec22266c96df92a871",
"assets/assets/images/beginner_app/welcome.png": "6ce4870d65407436c8ebd9797cb0dac4",
"assets/assets/images/bank.png": "2b40a2fdd1121b0e8ab1db4dacc6df3e",
"assets/assets/images/roadmap.webp": "388f9a49273ab97a39c2e1ac3d345a65",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
