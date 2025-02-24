const previous_window = document.getElementById("previous-window");
previous_window.addEventListener("click", previous_window_function);

const next_window = document.getElementById("next-window");
next_window.addEventListener("click", next_window_function);

//Comentando porque da error al no encontrar botón de new window porque lo quitamos del UI nuevo

// const new_window = document.getElementById("new-window");
// new_window.addEventListener("click", new_window_function);

function previous_window_function() {
  chrome.windows.getAll({ populate: true }, function (windows) {
    chrome.windows.getCurrent({ populate: false }, function (currentWindow) {
      var currentIndex = windows.findIndex(
        (window) => window.id === currentWindow.id
      );
      var previousWindow =
        windows[currentIndex - 1] || windows[windows.length - 1];
      chrome.windows.update(previousWindow.id, { focused: true });
    });
  });
}

function next_window_function() {
  chrome.windows.getAll({ populate: true }, function (windows) {
    chrome.windows.getCurrent({ populate: false }, function (currentWindow) {
      var currentIndex = windows.findIndex(
        (window) => window.id === currentWindow.id
      );
      var nextWindow = windows[currentIndex + 1] || windows[0];
      chrome.windows.update(nextWindow.id, { focused: true });
    });
  });
}

function new_window_function() {
  chrome.windows.create({
    url: "about:blank",
    incognito: false, // asumimos que no estamos en modo incógnito
    state: "maximized",
  });
}
