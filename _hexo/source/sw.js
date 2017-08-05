"use strict"; (function() {
    var cacheVersion = "-170801";
    var staticImageCacheName = "static-image" + cacheVersion;
    var staticAssetsCacheName = "static-assets" + cacheVersion;
    var contentCacheName = "content" + cacheVersion;
    var vendorCacheName = "vendor" + cacheVersion;
    var maxEntries = 100;
    self.importScripts("https://m-nfz.b0.upaiyun.com/static/js/sw-toolbox.js");
    self.toolbox.options.debug = false;
    self.toolbox.options.networkTimeoutSeconds = 4;
    /* staticImageCache */
    self.toolbox.router.get("/img/(.*)", self.toolbox.fastest, {
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
    self.toolbox.router.get("/static/(.*)", self.toolbox.networkOnly, {
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
    self.toolbox.router.get("/archives/(.*).html(.*)", self.toolbox.networkFirst, {
        cache: {
            name: contentCacheName,
            maxEntries: maxEntries
        }
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

    /* VendorCache */
    self.toolbox.router.get("/next/config.json", self.toolbox.networkOnly, {
        origin: /disqus\.com/,
    });
    self.toolbox.router.get("/api/(.*)", self.toolbox.networkOnly, {
        origin: /disqus\.com/,
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /c\.disquscdn\.com/,
        cache: {
            name: vendorCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /uploads\.disquscdn\.com/,
        cache: {
            name: vendorCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /(referrer\.disqus\.com|ssl\.google-analytics\.com)/,
        cache: {
            name: vendorCacheName,
            maxEntries: maxEntries
        }
    });
    
    /* NoCache */
    self.toolbox.router.get("/sw.js",self.toolbox.networkOnly),
    self.toolbox.router.get("/(.*).php(.*)", self.toolbox.networkOnly),

    /* Precache */
    self.toolbox.precache(['https://m-nfz.b0.upaiyun.com/img/avatar-m.png', 'https://m-nfz.b0.upaiyun.com/img/upyun_logo.svg','https://m-nfz.b0.upaiyun.com/fonts/MaterialIcons-Regular.woff2','http://m-nfz.b0.upaiyun.com/img/unification.png!blogth']);

    self.addEventListener("install",
    function(event) {
        return event.waitUntil(self.skipWaiting())
    });
    self.addEventListener("activate",
    function(event) {
        return event.waitUntil(self.clients.claim())
    })
})();