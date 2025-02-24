let firstWindowTabLimit;

chrome.storage.local.get(["generalTabLimit"], (result) => {
  firstWindowTabLimit = result.generalTabLimit || 8;
});

function saveTabLimit() {
  // Obtener el valor seleccionado del select
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

// Agregar un event listener al select para que se ejecute saveTabLimit cada vez que se seleccione un nuevo valor
const limitSelect = document.getElementById("num-selector");
limitSelect.addEventListener("change", saveTabLimit);

// Ejecutar la función para cargar el valor de tabLimit desde el almacenamiento local al cargar la página
chrome.windows.getCurrent({ populate: false }, (currentWindow) => {
  const currentWindowId = currentWindow.id;
  chrome.storage.local.get(["windowId_and_limitPerWindow"], (result) => {
    const limitPerWindow = result.windowId_and_limitPerWindow;
    const currentWindowLimit =
      limitPerWindow && limitPerWindow[currentWindowId];
    limitSelect.value = currentWindowLimit || firstWindowTabLimit; // Asigna 2 por defecto si no hay valor en el almacenamiento local
  });
});
