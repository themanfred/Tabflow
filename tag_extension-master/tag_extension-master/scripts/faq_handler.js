document.addEventListener("DOMContentLoaded", function () {
  const settingsPage = document.getElementById("settings");
  const faqContainer = document.getElementById("faq-container");
  const openFaqPageBtn = document.getElementById("helpBtn");
  const backBtnToSettingsPage = document.getElementById(
    "backBtnToSettingsPage"
  );

  openFaqPageBtn.addEventListener("click", function () {
    settingsPage.style.display = "none";
    faqContainer.style.display = "block";
  });

  backBtnToSettingsPage.addEventListener("click", function () {
    faqContainer.style.display = "none";
    settingsPage.style.display = "block";
  });
});
