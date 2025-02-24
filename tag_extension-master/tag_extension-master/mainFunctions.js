let windowCreated = false;
let creatingWindow = false;
let lastTabURL = "";
let lastTabToOpen = "";
var prendido ;
let GENERAL_DEFAULT_TABS_LIMIT = 8;


function getTabUrl(tabId) {
  return new Promise((resolve) => {
    chrome.tabs.get(tabId, (tab) => {
      resolve(tab.url);
    });
  });
}

// Obtén el límite de pestañas una vez al inicio
chrome.storage.local.get(["generalTabLimit"], (result) => {
  const generalTabLimit = result.generalTabLimit;
  GENERAL_DEFAULT_TABS_LIMIT = generalTabLimit || 8;
});

// Escucha los cambios en chrome.storage para actualizar el límite
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "local" && changes.generalTabLimit) {
    GENERAL_DEFAULT_TABS_LIMIT = changes.generalTabLimit.newValue;
  }
});

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url) {
    lastTabToOpen = await getTabUrl(tabId);
    //console.log("URL de la pestaña:", lastTabToOpen);
    //alert("URL de la pestaña:", lastTabToOpen);
  }
});
/*
chrome.tabs.onCreated.addListener(async function (tab) {
  if (tab.url) {
    lastTabToOpen = tab.url;
    //console.log("URL de la pestaña:", lastTabToOpen);
    alert("URL de la pestaña:", lastTabToOpen);
  }
});*/
//alert("valor: " + prendido);
chrome.tabs.onCreated.addListener(function (tab) {

  chrome.storage.local.get(["windowId_and_limitPerWindow"], (result) => {


    chrome.storage.local.get("generalSwitchElement", (data) => {
      const generalSwitchElement = data.generalSwitchElement;
    if(generalSwitchElement === true){
      const windowIdAndLimit = result.windowId_and_limitPerWindow || {};
    const tabLimit = windowIdAndLimit[tab.windowId.toString()] || GENERAL_DEFAULT_TABS_LIMIT;
    
    
    chrome.tabs.query({}, async function (tabs) {
      let count = tabs.filter((t) => t.windowId === tab.windowId).length;

      if (count > tabLimit && !windowCreated && !creatingWindow) {
        creatingWindow = true;
        lastTabToOpen = tab.url;
        while (!lastTabToOpen) {
          await new Promise((resolve) => setTimeout(resolve, 50));
        }

        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
          if (tabs.length > 0) {
            lastTabURL = tabs[0].url;
          }

          chrome.windows.create({ focused: true, state: "maximized" }, function (newWindow) {
            creatingWindow = false;
            const newWindowId = newWindow.id.toString();
            const newWindowLimits = { [newWindowId]: tabLimit };
            chrome.storage.local.get(["windowId_and_limitPerWindow"], (result) => {
              const windowIdAndLimit = result.windowId_and_limitPerWindow || {};
              chrome.storage.local.set({
                windowId_and_limitPerWindow: {
                  ...windowIdAndLimit,
                  ...newWindowLimits,
                },
              });
            });
            chrome.tabs.query({ windowId: newWindow.id }, function (tabs) {
              if (tabs.length > 0) {
                chrome.tabs.update(tabs[0].id, { url: lastTabToOpen });
              }
            });

            // Elimina la última pestaña abierta en la ventana actual
            chrome.tabs.remove(tab.id);
          });

          windowCreated = true;
        });
      } else if (count <= tabLimit) {
        windowCreated = false;
      }
    });
    }
    });
  });
});

