function clearErrors() {

  errors = document.getElementsByClassName('errormsg');
  for (let item of errors) {
    item.innerHTML = "";
  }

}
function seterror(id, error) {
  //sets error inside tag of id 
  element = document.getElementById(id);
  element.innerHTML = error;

}

function validateForm() {
  var returnval = true;
  clearErrors();
  let regex = /^[a-zA-Z ]*$/
  let regex2 = /^\d+$/;
  //perform validation and if validation fails, set the value of returnval to false
  var name = document.getElementById("name").value;
  if (name.length < 5) {
    seterror("errormsg1", "*Length of name is too short");
    returnval = false;
  }

  if (name.length == 0) {
    seterror("errormsg1", "*Length of name cannot be zero!");
    returnval = false;
  }


  if (!regex.test(name)) {
    seterror("errormsg1", "*Name contains only Alphabetic Characters")
    returnval = false;
  }

  var email = document.getElementById("email").value;
  if (email.length > 30) {
    seterror("errormsg2", "*Email length is too long");
    returnval = false;
  }
  if (email.indexOf('@') <= 0) {
    seterror("errormsg2", "*Please enter valid email");
    returnval = false;
  }
  if (email.charAt((email.length - 4)) != '.') {
    seterror("errormsg2", "*Please enter valid email");
    returnval = false;
  }

  var phone = document.getElementById("phone").value;
  if (phone.length != 10) {
    seterror("errormsg3", "*Phone number should be of 10 digits!");
    returnval = false;
  }
  if (!regex2.test(phone)) {
    seterror("errormsg3", "*Phone number contains only Numeric digit");
    returnval = false;
  }


  return returnval;
}




// < !--Loading Animation Script-- >

// Hide the loading overlay when the page is fully loaded
window.addEventListener("load", function () {
  const loadingOverlay = document.querySelector(".loading-overlay");
  loadingOverlay.style.display = "none";

  // Remove the "Contact Us" link from the navigation after the page loads
  const contactLink = document.getElementById("contact-link");
  if (contactLink) {
    contactLink.parentElement.remove();
  }
});

// Add click event listener to clicked-glow elements
const clickedGlowElements = document.querySelectorAll(".clicked-glow");
clickedGlowElements.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("clicked-glow");
    setTimeout(() => {
      element.classList.remove("clicked-glow");
    }, 1000); // Remove the glow class after 0.5 seconds (duration of glow animation)
  });
});

document.getElementById("year").innerHTML = new Date().getFullYear();