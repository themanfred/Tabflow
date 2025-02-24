function updateSelectOptions() {
  chrome.tabs.query({ currentWindow: true }, function (tabs) {
    const numTabs = tabs.length;
    const numSelector = document.getElementById("num-selector");

    for (let i = 0; i < numSelector.options.length; i++) {
      const optionValue = parseInt(numSelector.options[i].value, 10);
      if (optionValue <= numTabs) {
        numSelector.options[i].disabled = true;
      } else {
        numSelector.options[i].disabled = false;
      }
    }
  });
}

// Actualiza las opciones del select al cargar la página
updateSelectOptions();

// Actualiza las opciones del select al crear una nueva pestaña
chrome.tabs.onCreated.addListener(function (tab) {
  updateSelectOptions();
});

// Actualiza las opciones del select al cerrar una pestaña
chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
  updateSelectOptions();
});
