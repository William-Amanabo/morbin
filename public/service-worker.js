/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* importScripts('/__/firebase/7.17.1/firebase-app.js');
importScripts('/__/firebase/7.17.1/firebase-messaging.js');
importScripts('/__/firebase/init.js'); */

// Set this to true for production
var doCache = true;
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
);
// Name our cache
var CACHE_NAME = "my-pwa-cache-v2";

// sample import of scripts in service workers
//importScripts("./urlB64ToUint8Array.js");

// The first time the user starts up the PWA, 'install' is triggered.

if (workbox) {
  console.log("Workbox is loaded");
  workbox.core.skipWaiting();
  console.log("workbox", workbox);

  /* injection point for manifest files.  */
  workbox.precaching.precacheAndRoute([{"revision":"d667cab37a11f7ff6d98c5cc4d4a5bd6","url":"asset-manifest.json"},{"revision":"a9372185eb7ba530b669b5b05062d240","url":"favicon.png"},{"revision":"da2ced0304b5415122e771272b1cd48d","url":"icon-192x192.png"},{"revision":"16894beb1cc2a7cd021507b8979067fe","url":"icon-256x256.png"},{"revision":"62e2c5ffffa9948b538ae6d79922545e","url":"icon-384x384.png"},{"revision":"038940e69a36fd6ebe630f3fe1aee48d","url":"icon-512x512.png"},{"revision":"faf8e07a3b11126b74f6ca98dbe8c84d","url":"index.html"},{"revision":"e65e31bbf4783f44dd66ba2e752680c9","url":"logo.png"},{"revision":"951410bf3356be4d21ddc6f7f9e60e66","url":"logo.svg"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"7d613a08c3939a5baeb58f415f8d3a16","url":"manifest.webmanifest"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"2e72c53c184e62e4c0400d127c2b96c7","url":"service-worker(old).js"},{"revision":"b69aec7c75e6706969188b7007d7ce34","url":"static/css/main.7cbc0dcd.chunk.css"},{"revision":"8ba1930254210b29253e84f2164aa4a8","url":"static/js/2.b1534b86.chunk.js"},{"revision":"e5bcbf26911ad480f7e185b09bf66986","url":"static/js/3.4e2802ee.chunk.js"},{"revision":"62cb2d219274917009c438a0961a5976","url":"static/js/main.307f6522.chunk.js"},{"revision":"32a7585d03ce6f8d1b7fc199018a5126","url":"static/js/runtime-main.33a53c5a.js"},{"revision":"fac3a6976fc8bf0a092e43cc6530834f","url":"static/media/arrow-up-right.6b1cd43b.svg"},{"revision":"ea7700c07fec16329e7121d5c231f9c4","url":"static/media/arrow.d1979166.svg"},{"revision":"9008778b551dd675b89e52fcdc9e19b0","url":"static/media/Big Logo.22527680.svg"},{"revision":"ac996be935908d7ff0a4574e666b503a","url":"static/media/delivery-success.b6b3f25e.png"},{"revision":"77c6c20cd816e4c0e5bfd89ecb0f1a58","url":"static/media/edit.fea156c6.svg"},{"revision":"5486e38461dc41b8bf304550a4136fd7","url":"static/media/fi-rr-bell.b9b2d8d5.svg"},{"revision":"ad2abff63135d3934e0f74eb03ad7a79","url":"static/media/fi-rr-eye-crossed.fad18708.svg"},{"revision":"e5ddbffb05bcba46836746580f554428","url":"static/media/fi-rr-eye.7ed35a61.svg"},{"revision":"95801faf9324d799e84a7434afc3ffb2","url":"static/media/fi-rr-info.2af40dfe.svg"},{"revision":"889ad7e8b25142a4e57e8fa40a100a5a","url":"static/media/fi-rr-lock.8480d8ce.svg"},{"revision":"bd2c6cb37b5a5bfcb972734458a14461","url":"static/media/fi-rr-map-marker.752119a7.svg"},{"revision":"33babad39ac86c199187f52862c31f9a","url":"static/media/fi-rr-notebook.966dd69b.svg"},{"revision":"e42152017077c202b6a1c3cce12d948a","url":"static/media/fi-rr-power.ece32024.svg"},{"revision":"7544241a9336975f93691c187298fd25","url":"static/media/fi-rr-shopping-bag.1c0f2ba5.svg"},{"revision":"5361a3bba7e46dad4c4f5dd475a65934","url":"static/media/fi-rr-upload.c1b62bac.svg"},{"revision":"9488bb9ae5215e731cbcbcf96904f1c1","url":"static/media/home.3917ff75.svg"},{"revision":"41baf5d2ca9ab35e591e6e0c37c3b217","url":"static/media/qr-code-scan.b06c0f81.svg"},{"revision":"2463feb0c6aef439d0a73715d2073460","url":"static/media/qr-code-svgrepo-com 1.00c2ce56.svg"},{"revision":"04290563d638e2c516de25991aa55b26","url":"static/media/smiling lady 2.728e9056.png"},{"revision":"c9d8c43d5dd6bcfaecab0ef968130d43","url":"static/media/standingwoman.58235e7f.png"},{"revision":"c49e5c5d97fb13ba986e5ce6727fe1dd","url":"static/media/switch.2a52fdb4.svg"},{"revision":"fe7753f14bec99255473899d684b4a48","url":"static/media/user.f303443e.svg"},{"revision":"8c573c85d7ff9f66240185c10184f647","url":"static/media/users.321ddf88.svg"}]);

  self.addEventListener("install", (event) => {
    event.waitUntil(self.skipWaiting());
  });

  // Delete old caches that are not our current one!
  self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
    /* const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
      caches.keys().then((keyList) =>
        Promise.all(
          keyList.map((key) => {
            if (!cacheWhitelist.includes(key)) {
              console.log("Deleting cache: " + key);
              return caches.delete(key);
            }
          })
        )
      )
    ); */
  });

  // Handling push notification clicks
  self.addEventListener("notificationclick", (payload) => {
    payload.notification.close();

    if (payload.action) {
      payload.waitUntil(
        clients.matchAll({ type: "window" }).then((clientsArr) => {
          // If a Window tab matching the targeted URL already exists, focus that;
          const hadWindowToFocus = clientsArr.some((windowClient) =>
            windowClient.url === payload.notification.data.url
              ? (windowClient.focus(), true)
              : false
          );
          // Otherwise, open a new tab to the applicable URL and focus it.
          if (!hadWindowToFocus)
            clients
              .openWindow(payload.notification.data.url)
              .then((windowClient) =>
                windowClient ? windowClient.focus() : null
              );
        })
      );
    }
  });

  self.addEventListener("push", (payload) => {
    console.log("push event listener payload", payload);
    console.log(
      "push event listener payload.data.text()",
      JSON.parse(payload.data.text())
    );
    let _data = payload.data ? JSON.parse(payload.data.text()) : {};
    let notificationUrl = _data.url;
    let notificationTitle = _data.title;
    let notificationOptions = {
      body: _data.body,
      icon: _data.icon,
      tag: _data.tag,
      actions: [
        {
          action: notificationUrl,
          title: "open transactions",
        },
      ],
      data: { url: notificationUrl },
    };
    payload.waitUntil(
      self.registration.showNotification(notificationTitle, notificationOptions)
    );
  });

  /* custom cache rules */
  workbox.routing.registerRoute(
    new workbox.routing.NavigationRoute(
      new workbox.strategies.NetworkFirst({
        cacheName: CACHE_NAME,
      })
    )
  );

  workbox.routing.registerRoute(
    new RegExp("(https|http):.*.(css|js|json|)"),
    new workbox.strategies.NetworkFirst({ cacheName: "external-cache" })
  );
} else {
  console.log("Workbox could not be loaded. No Offline support");
}
