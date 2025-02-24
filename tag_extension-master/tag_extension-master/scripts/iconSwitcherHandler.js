// document.addEventListener("DOMContentLoaded", function () {
//   // En tu archivo iconSwitcherHandler.js
//   chrome.runtime.onMessage.addListener(function (
//     request,
//     sender,
//     sendResponse
//   ) {
//     if (request.theme === "dark") {
//       chrome.browserAction.setIcon({ path: darkIcon });
//     } else {
//       chrome.browserAction.setIcon({ path: lightIcon });
//     }

//     // Guarda la preferencia del usuario
//     chrome.storage.local.set({ theme: request.theme });
//   });
// });
