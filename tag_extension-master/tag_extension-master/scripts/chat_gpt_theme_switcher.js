/* Thomas Freund Paternostro*/
/* Last edited date: 14/02/2025*/
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const themeToggle = document.getElementById("themeBtn");
  const heading = document.querySelector("h1");
  const settingsBtnIcon = document.getElementById("settingsBtnIcon");
  const labelOne = document.getElementById("labelOne");
  const leftArrowBtnIcon = document.getElementById("leftArrowBtnIcon");
  const rightArrowBtnIcon = document.getElementById("rightArrowBtnIcon");
  const labelTwo = document.getElementById("labelTwo");
  const numSelector = document.getElementById("num-selector");
  const numSelectorSettings = document.getElementById("num-selector-settings"); // ✅ Ensure this is selected
  const shareBtn = document.getElementById("shareBtn");
  const themeBtn = document.getElementById("themeBtn");
  const shareBtnIcon = document.getElementById("shareBtnIcon");
  const themeBtnIcon = document.getElementById("themeBtnIcon");
  const shareBtnLabel = document.getElementById("shareBtnLabel");
  const themeBtnLabel = document.getElementById("themeBtnLabel");

  // Load current theme from storage
  chrome.storage.local.get("theme", function (result) {
    const currentTheme = result.theme || "light";
    applyTheme(currentTheme);
  });

  // Add click event listener to theme button
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      chrome.storage.local.get("theme", function (result) {
        const currentTheme = result.theme || "light";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(newTheme);
        chrome.storage.local.set({ theme: newTheme });
      });
    });
  } else {
    console.error("themeBtn not found in DOM!");
  }

  function applyTheme(theme) {
    console.log("Changing theme to:", theme);

    const leftArrowBtn = document.getElementById("previous-window");
    const rightArrowBtn = document.getElementById("next-window");
    const labelThree = document.getElementById("labelThree"); // ✅ Dropdown label
    const numSelectorSettings = document.getElementById("num-selector-settings"); // ✅ Dropdown
    const tabOnOf = document.querySelector(".tabOnOf"); // ✅ TabFlow ON/OFF text

    if (theme === "light") {
        document.body.style.backgroundColor = "white";
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");

        if (heading) heading.style.color = "#FF692";
        if (settingsBtnIcon) settingsBtnIcon.src = "iconos/new_icons/settings_light.png";
        if (labelOne) labelOne.style.color = "black";
        if (leftArrowBtnIcon) leftArrowBtnIcon.src = "iconos/new_icons/arrow_back_ios_new_black.png";
        if (rightArrowBtnIcon) rightArrowBtnIcon.src = "iconos/new_icons/arrow_forward_ios_black.png";
        if (labelTwo) labelTwo.style.color = "black";
        
        // ✅ Ensure dropdown styles change in light mode
        if (numSelector) {
            numSelector.classList.add("light-theme");
            numSelector.classList.remove("dark-theme");
            numSelector.style.backgroundColor = "white";
            numSelector.style.color = "black";
        }
        if (numSelectorSettings) {
            numSelectorSettings.classList.add("light-theme");
            numSelectorSettings.classList.remove("dark-theme");
            numSelectorSettings.style.backgroundColor = "white";
            numSelectorSettings.style.color = "black";
        }

        // ✅ Ensure labels change in light mode
        if (labelThree) labelThree.style.color = "black";
        if (tabOnOf) tabOnOf.style.color = "black";

        // ✅ Ensure arrows switch to light mode
        if (leftArrowBtn) {
            leftArrowBtn.classList.add("light-theme");
            leftArrowBtn.classList.remove("dark-theme");
            leftArrowBtn.style.backgroundColor = "#f0efef";
        }
        if (rightArrowBtn) {
            rightArrowBtn.classList.add("light-theme");
            rightArrowBtn.classList.remove("dark-theme");
            rightArrowBtn.style.backgroundColor = "#f0efef";
        }

        if (shareBtn) shareBtn.style.backgroundColor = "#ffffff";
        if (themeBtn) themeBtn.style.backgroundColor = "#ffffff";
        if (shareBtnIcon) shareBtnIcon.src = "iconos/new_icons/share_black.png";
        if (themeBtnIcon) themeBtnIcon.src = "iconos/new_icons/dark_mode.png";
        if (shareBtnLabel) shareBtnLabel.style.color = "black";
        if (themeBtnLabel) themeBtnLabel.style.color = "black";
        
        chrome.action.setIcon({ path: "iconos/extension_icons/Logo Light.png" });

    } else {
        document.body.style.backgroundColor = "#1f1f1f";
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");

        if (heading) heading.style.color = "#FF692";
        if (settingsBtnIcon) settingsBtnIcon.src = "iconos/new_icons/settings.png";
        if (labelOne) labelOne.style.color = "#CCCCCC";
        if (leftArrowBtnIcon) leftArrowBtnIcon.src = "iconos/new_icons/arrow_back_ios_new.png";
        if (rightArrowBtnIcon) rightArrowBtnIcon.src = "iconos/new_icons/arrow_forward_ios.png";
        if (labelTwo) labelTwo.style.color = "#CCCCCC";

        // ✅ Ensure dropdown styles change in dark mode
        if (numSelector) {
            numSelector.classList.add("dark-theme");
            numSelector.classList.remove("light-theme");
            numSelector.style.backgroundColor = "#343434";
            numSelector.style.color = "white";
        }
        if (numSelectorSettings) {
            numSelectorSettings.classList.add("dark-theme");
            numSelectorSettings.classList.remove("light-theme");
            numSelectorSettings.style.backgroundColor = "#343434";
            numSelectorSettings.style.color = "white";
        }

        // ✅ Ensure labels change in dark mode
        if (labelThree) labelThree.style.color = "white";
        if (tabOnOf) tabOnOf.style.color = "white";

        // ✅ Ensure arrows switch to dark mode
        if (leftArrowBtn) {
            leftArrowBtn.classList.add("dark-theme");
            leftArrowBtn.classList.remove("light-theme");
            leftArrowBtn.style.backgroundColor = "#343434";
        }
        if (rightArrowBtn) {
            rightArrowBtn.classList.add("dark-theme");
            rightArrowBtn.classList.remove("light-theme");
            rightArrowBtn.style.backgroundColor = "#343434";
        }

        if (shareBtn) shareBtn.style.backgroundColor = "#1f1f1f";
        if (themeBtn) themeBtn.style.backgroundColor = "#1f1f1f";
        if (shareBtnIcon) shareBtnIcon.src = "iconos/new_icons/share.png";
        if (themeBtnIcon) themeBtnIcon.src = "iconos/new_icons/light_mode.png";
        if (shareBtnLabel) shareBtnLabel.style.color = "#CCCCCC";
        if (themeBtnLabel) themeBtnLabel.style.color = "#CCCCCC";

        chrome.action.setIcon({ path: "iconos/extension_icons/Logo Dark.png" });
    }
  }
});
