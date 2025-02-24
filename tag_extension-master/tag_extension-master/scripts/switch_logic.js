
/*function asignar(){
   
    const switchElement = document.querySelector('.switch input[type="checkbox"]');
    switchElement.checked = true;
  
}
const switchElement = document.querySelector('.switch input[type="checkbox"]');
//switchElement.addEventListener("change", asignar);
chrome.windows.getCurrent({ populate: false }, () => {
    const switchElement = document.querySelector('.switch input[type="checkbox"]');
    switchElement.checked = false;
    alert("entre" + switchElement.checked);
});*/
/*
chrome.storage.local.get("generalSwitchElement", (data) => {
    switchState = data.generalSwitchElement;
    if (typeof switchState !== 'undefined') {
      switchElement.checked = switchState;
    } else {
      switchElement.checked = false; // Valor por defecto si no se encuentra en el almacenamiento local
    }
  });*/
/*
  function saveTabLimit() {
    // Obtener el valor seleccionado del select
    const switchElement = document.querySelector('.switch input[type="checkbox"]');
    const limitSelect = document.getElementById("num-selector");
    const defaultLimit = parseInt(limitSelect.value) || firstWindowTabLimit; // Asigna 2 por defecto si no hay valor seleccionado
  
    // Actualizar el almacenamiento local con los nuevos valores
    chrome.storage.local.get(["windowId_and_limitPerWindow"], (result) => {
      const windowIdAndLimit = result.windowId_and_limitPerWindow || {};
  
      // Obtener el límite por defecto si no se especifica uno nuevo
      const newLimit = defaultLimit || firstWindowTabLimit;
  
      // Obtener el ID de la ventana actual
      chrome.windows.getCurrent((currentWindow) => {
        const newId = currentWindow.id.toString();
  
        // Actualizar el objeto de límite de la ventana actual en el almacenamiento local
        const newWindowLimits = {
          ...windowIdAndLimit,
          [newId]: newLimit,
        };
  
        chrome.storage.local.set(
          {
            windowId_and_limitPerWindow: newWindowLimits,
          },
          () => {
        
          }
        );
      });
    });
  }
  /*

const switchElement = document.querySelector('.switch input[type="checkbox"]');
switchElement.addEventListener("change", saveSwitchOnOf);*/