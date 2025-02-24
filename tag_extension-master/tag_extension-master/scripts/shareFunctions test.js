//Edited by: Thomas Freund
//Date: 13/02/2025
const shareButton = document.getElementById("shareBtn");
const backShareButton = document.getElementById("backShareBtn");
const copyToClipboard = document.getElementById("clipboardShareBtn");
// not using email
//const sendEmail = document.getElementById("emailBtn");

const shareMessage =
  "Hey :), I found this FREE browser extension useful. Have you ever had the problem of having like 20 tiny tabs opened in a single Browser Window and everything becomes a confusing mess? If so, now there is a free solution! Click the link to download here:\n➡ tinyurl.com/TabFlowext ⬅ 🤠. ";
const shareAndThemeContainer = document.getElementById(
  "share-and-theme-container"
);
const sharePlatformsContainer = document.getElementById(
  "share-platforms-container"
);
/* not using email
sendEmail.addEventListener("click", function () {
  const subject = "Hey :), I found this FREE browser extension useful...";
  window.open(
    `https://mail.google.com/mail/?view=cm&to=&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(shareMessage)}`
  );
});
*/
shareButton.addEventListener("click", function () {
  shareAndThemeContainer.style.display = "none";
  sharePlatformsContainer.style.display = "block";
});

backShareButton.addEventListener("click", function () {
  shareAndThemeContainer.style.display = "flex";
  shareAndThemeContainer.style.justifyContent = "center";
  shareAndThemeContainer.style.alignItems = "center";
  sharePlatformsContainer.style.display = "none";
});

copyToClipboard.addEventListener("mouseover", () => {
  copyToClipboard.style.cursor = "pointer";
});

copyToClipboard.addEventListener("click", function () {
  navigator.clipboard.writeText(shareMessage);
});
