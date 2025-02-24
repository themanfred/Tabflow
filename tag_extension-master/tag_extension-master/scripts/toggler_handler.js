// toggler_handler.js

function toggleSwitchHandler(element) {
    element.classList.toggle('on');
  }
  
  document.getElementById('toggleWindowTransition').addEventListener('click', function() {
    toggleSwitchHandler(this);
  });
  
  document.getElementById('toggleShowProducts').addEventListener('click', function() {
    toggleSwitchHandler(this);
  });