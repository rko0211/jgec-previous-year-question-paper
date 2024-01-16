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

//Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycbyUNpx3-D7JQ_4gQs0TPEIlNyHRKA9iVMewb_fVYwjMjd3bB61GolgOLYsdzgwoh6Lhsg/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});

//scroll to top
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#top-button').fadeIn();
    } else {
      $('#top-button').fadeOut();
    }
  });
  $('#top-button').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});