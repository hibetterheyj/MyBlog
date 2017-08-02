"use strict"; (function() {
    var cacheVersion = "-170801";
    var staticImageCacheName = "static-image" + cacheVersion;
    var staticAssetsCacheName = "static-assets" + cacheVersion;
    var contentCacheName = "content" + cacheVersion;
    var maxEntries = 100;
    self.importScripts("https://m-nfz.b0.upaiyun.com/static/js/sw-toolbox.js");
    self.toolbox.options.debug = false;
    self.toolbox.options.networkTimeoutSeconds = 2;
    /* staticImageCache */
    self.toolbox.router.get("/img/(.*)", self.toolbox.cacheFirst, {
        origin: /m-nfz\.b0\.upaiyun\.com/,
        cache: {
            name: staticImageCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /p0\.ssl\.qhmsg\.com/,
        cache: {
            name: staticImageCacheName,
            maxEntries: maxEntries
        }
    });
        self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /img-nfz\.b0\.upaiyun\.com/,
        cache: {
            name: staticImageCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /ooo\.0o0\.ooo/,
        cache: {
            name: staticImageCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /i\.loli\.net/,
        cache: {
            name: staticImageCacheName,
            maxEntries: maxEntries
        }
    });

    /* StaticAssetsCache */    
    self.toolbox.router.get("/css/(.*)", self.toolbox.networkOnly, {
        origin: /m-nfz\.b0\.upaiyun\.com/,
    });
    self.toolbox.router.get("/js/(.*)", self.toolbox.networkOnly, {
        origin: /m-nfz\.b0\.upaiyun\.com/,
    });
    self.toolbox.router.get("/static/(.*)", self.toolbox.networkFirst, {
        origin: /m-nfz\.b0\.upaiyun\.com/,
        cache: {
            name: staticAssetsCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/fonts/(.*)", self.toolbox.cacheFirst, {
        origin: /m-nfz\.b0\.upaiyun\.com/,
        cache: {
            name: staticAssetsCacheName,
            maxEntries: maxEntries
        }
    });

    /* ContentCache */ 
    self.toolbox.router.get("/archives/(.*).html(.*)", self.toolbox.fastest, {
        cache: {
            name: contentCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*).php(.*)", self.toolbox.networkOnly, {
    });
    self.toolbox.router.get("/(tags|about|gallery|archives|links)(.*)", self.toolbox.networkFirst, {
        cache: {
            name: contentCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/$", self.toolbox.networkFirst, {
        cache: {
            name: contentCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/\?(.*)$", self.toolbox.networkFirst, {
        cache: {
            name: contentCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/", self.toolbox.networkFirst, {
        cache: {
            name: contentCacheName,
            maxEntries: maxEntries
        }
    });

    self.toolbox.precache(['https://m-nfz.b0.upaiyun.com/img/avatar-m.png', 'https://m-nfz.b0.upaiyun.com/img/upyun_logo.svg','https://m-nfz.b0.upaiyun.com/fonts/MaterialIcons-Regular.woff2']);

    self.addEventListener("install",
    function(event) {
        return event.waitUntil(self.skipWaiting())
    });
    self.addEventListener("activate",
    function(event) {
        return event.waitUntil(self.clients.claim())
    })
})();