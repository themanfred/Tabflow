// Escuchar el evento de creación de nuevas pestañas
chrome.tabs.onCreated.addListener(function (tab) {
  // Obtener todas las pestañas de la ventana actual
  chrome.tabs.query({ windowId: tab.windowId }, function (tabs) {
    // Contar las pestañas en la ventana actual
    const tabCount = tabs.length;

    // Mostrar una notificación con la cantidad de pestañas abiertas
    chrome.notifications.create({
      type: "basic",
      iconUrl: "advertencia.png",
      title: "Cantidad de pestañas abiertas",
      message: `Hay ${tabCount} pestañas abiertas en la ventana actual.`,
    });
  });
});
