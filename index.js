const toggleSwitch = document.getElementById('modeToggle');

function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

toggleSwitch.addEventListener('change', switchTheme);

   
let menu = document.querySelector('.menu');
let header = document.querySelector('header');
menu.onclick = function () {
    header.classList.toggle('active');
}