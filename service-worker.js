"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portafolio/index.html","0a51da083bf8ad3201cef9a8fcf90592"],["/portafolio/static/css/main.83e05353.css","8bea79ec042bc90b714be0ede2ef8135"],["/portafolio/static/js/main.a52e6cfe.js","1b2c9079defe2346c277dbf5a532c8d6"],["/portafolio/static/media/blanco.7947c6a7.jpg","7947c6a7bd8c51df68b128dcdfdc88b6"],["/portafolio/static/media/gladys.0f2e8f06.png","0f2e8f063c7c048a1d6e0f22e301a442"],["/portafolio/static/media/htmll.e9680c3a.png","e9680c3af06cadc99ac14f270d0c9f44"],["/portafolio/static/media/img-1-y.72be4154.jpg","72be4154aa64a03706aac9ab754ee588"],["/portafolio/static/media/p-1.0b6b7b42.png","0b6b7b4254380f0e0fe1e86356658e43"],["/portafolio/static/media/p-2.d6168c30.png","d6168c309d5dfac7365b54a3b418db0c"],["/portafolio/static/media/p-3.a4ec5d1f.png","a4ec5d1fa70b93c6bd592d4e67c444a0"],["/portafolio/static/media/slack.69e0a5ae.png","69e0a5ae7537001a03ccb0417c4a51b7"],["/portafolio/static/media/two.c77b8e0c.jpg","c77b8e0ce1ced089209730e53c4b30e1"],["/portafolio/static/media/yo.8bee79f1.JPG","8bee79f1b54150d85e741feda2bfdf56"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/portafolio/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});