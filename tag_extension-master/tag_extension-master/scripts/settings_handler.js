document.addEventListener('DOMContentLoaded', function() {
  const home = document.getElementById('main-container');
  const settings = document.getElementById('settings');
  const settingsBtn = document.getElementById('settingsBtn');
  const backBtn = document.getElementById('backBtn');

  settingsBtn.addEventListener('click', function() {
    home.style.display = 'none';
    settings.style.display = 'block';
  });

  backBtn.addEventListener('click', function() {
      settings.style.display = 'none';
      home.style.display = 'block';
    });
});