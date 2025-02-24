function saveFirstWindowTabLimit() {
  const firstWindowlimitSelect = document.getElementById("num-selector-settings");
  const defaultLimit = parseInt(firstWindowlimitSelect.value) || 7;

  chrome.storage.local.set({ generalTabLimit: defaultLimit });
}

const firstWindowlimitSelect = document.getElementById("num-selector-settings");
firstWindowlimitSelect.addEventListener("change", saveFirstWindowTabLimit);

chrome.storage.local.get(["generalTabLimit"], (result) => {
  const generalTabLimit = result.generalTabLimit;
  firstWindowlimitSelect.value = generalTabLimit || 7;
});

function saveSwitchOnOf() {
  const switchElement = document.querySelector('.switch input[type="checkbox"]');
  chrome.storage.local.set({ generalSwitchElement: switchElement.checked });
  chrome.storage.local.get("generalSwitchElement", (data) => {
    const generalSwitchElement = data.generalSwitchElement;
  
  });

  
}


const switchElement2 = document.querySelector('.switch input[type="checkbox"]');
 switchElement2.addEventListener("change", saveSwitchOnOf);

chrome.storage.local.get("generalSwitchElement", (data) => {
  const generalSwitchElement = data.generalSwitchElement;
  if (typeof generalSwitchElement !== 'undefined') {
    
    switchElement2.checked = generalSwitchElement;
  } else {

    switchElement2.checked = false; // Valor por defecto si no se encuentra en el almacenamiento local
  }
});