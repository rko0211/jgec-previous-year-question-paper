async function serverHealthCheck() {

  const servers = [
    "https://jgec-pyqs-backend-service.up.railway.app/health",
    "https://jgec-pyqs-backend-service.onrender.com/health"
  ];

  const results = await Promise.allSettled(

    servers.map(async (url) => {

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`${url} failed`);
      }

    })
  );

  const failedServers = results.filter(
    result => result.status === "rejected"
  );

  if (failedServers.length === servers.length) {
    console.log("All servers health check failed!");
  }
}

serverHealthCheck();


let card_p = document.getElementsByClassName("common");
const toggleSwitch = document.getElementById('modeToggle');
function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
    for (let i = 0; i < card_p.length; i++) {
      card_p[i].classList.add("textBlack");
    }
  } else {
    document.body.classList.remove('dark-mode');
    for (let i = 0; i < card_p.length; i++) {
      card_p[i].classList.remove("textBlack");
    }
  }
}

toggleSwitch.addEventListener('change', switchTheme);


let menu = document.querySelector('.menu');
let header = document.querySelector('header');
menu.onclick = function () {
  header.classList.toggle('active');
}


//scroll to top
let mybutton = document.getElementById("to-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function f1() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}