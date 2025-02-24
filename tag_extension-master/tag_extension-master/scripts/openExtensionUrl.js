// En tu archivo openExtensionUrl.js
document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("tabFlowUrl");
  link.addEventListener("click", function () {
    window.open("http://tinyurl.com/TabFlowext", "_blank");
  });
});
