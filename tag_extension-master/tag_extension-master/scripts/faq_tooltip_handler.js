document
  .querySelector(".help-button")
  .addEventListener("mouseover", function () {
    document.querySelector(".faq-tooltip").style.display = "block";
  });

document
  .querySelector(".help-button")
  .addEventListener("mouseout", function () {
    document.querySelector(".faq-tooltip").style.display = "none";
  });
