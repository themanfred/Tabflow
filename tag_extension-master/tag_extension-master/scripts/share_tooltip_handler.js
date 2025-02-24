document
  .querySelector(".share-button-clipboard")
  .addEventListener("mouseover", function () {
    document.querySelector(".clipboard-tooltip").style.display = "block";
  });

document
  .querySelector(".share-button-clipboard")
  .addEventListener("mouseout", function () {
    document.querySelector(".clipboard-tooltip").style.display = "none";
  });

document
  .querySelector(".share-button-whatsapp")
  .addEventListener("mouseover", function () {
    document.querySelector(".whatsapp-tooltip").style.display = "block";
  });

document
  .querySelector(".share-button-whatsapp")
  .addEventListener("mouseout", function () {
    document.querySelector(".whatsapp-tooltip").style.display = "none";
  });
/*
document
  .querySelector(".share-button-facebook")
  .addEventListener("mouseover", function () {
    document.querySelector(".facebook-tooltip").style.display = "block";
  });

document
  .querySelector(".share-button-facebook")
  .addEventListener("mouseout", function () {
    document.querySelector(".facebook-tooltip").style.display = "none";
  });
*/
document
  .querySelector(".share-button-x")
  .addEventListener("mouseover", function () {
    document.querySelector(".twitter-tooltip").style.display = "block";
  });

document
  .querySelector(".share-button-x")
  .addEventListener("mouseout", function () {
    document.querySelector(".twitter-tooltip").style.display = "none";
  });
/*
document
  .querySelector(".share-button-mail")
  .addEventListener("mouseover", function () {
    document.querySelector(".email-tooltip").style.display = "block";
  });

document
  .querySelector(".share-button-mail")
  .addEventListener("mouseout", function () {
    document.querySelector(".email-tooltip").style.display = "none";
  });
*/
// tool tip for settings and FAQ
document
  .querySelector(".settings-button")
  .addEventListener("mouseover", function () {
    document.querySelector(".settings-tooltip").style.display = "block";
  });

document
  .querySelector(".settings-button")
  .addEventListener("mouseout", function () {
    document.querySelector(".settings-tooltip").style.display = "none";
  });
