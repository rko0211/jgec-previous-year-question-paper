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
let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}