function clearErrors() {
  const errors = document.getElementsByClassName('errormsg');
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function seterror(id, error) {
  const element = document.getElementById(id);
  element.innerHTML = error;
}

function validateForm() {
  let returnval = true;
  clearErrors();

  let regex = /^[a-zA-Z ]*$/;
  let regex2 = /^\d+$/;

  // Validate Name
  const name = document.getElementById("name").value;
  if (name.length < 5) {
    seterror("errormsg1", "*Length of name is too short");
    returnval = false;
  }
  if (name.length == 0) {
    seterror("errormsg1", "*Name cannot be empty!");
    returnval = false;
  }
  if (!regex.test(name)) {
    seterror("errormsg1", "*Name should only contain alphabetic characters.");
    returnval = false;
  }

  // Validate Email
  const email = document.getElementById("email").value;
  if (email.length > 30) {
    seterror("errormsg2", "*Email length is too long");
    returnval = false;
  }
  if (email.indexOf('@') <= 0 || email.lastIndexOf('.') <= email.indexOf('@')) {
    seterror("errormsg2", "*Please enter a valid email address.");
    returnval = false;
  }

  // Validate Phone Number
  const phone = document.getElementById("phone").value;
  if (phone.length !== 10) {
    seterror("errormsg3", "*Phone number must be 10 digits.");
    returnval = false;
  }
  if (!regex2.test(phone)) {
    seterror("errormsg3", "*Phone number must contain only numeric digits.");
    returnval = false;
  }

  // Validate Message
  const message = document.getElementById("message").value;
  if (message.length === 0) {
    seterror("errormsg4", "*Message cannot be empty.");
    returnval = false;
  }

  return returnval;
}

const handleForm = async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Validate form before submission
  if (!validateForm()) {
    return;
  }

  const formData = new FormData(event.target);
  formData.append("access_key", "0f6659eb-af94-45c8-9a73-166f0b4f78a3");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    // Show SweetAlert2 success alert
    Swal.fire({
      title: "Success!",
      text: "Message Sent Successfully!",
      icon: "success",
      confirmButtonText: "OK"
    }).then(() => {
      // Clear the form fields after alert confirmation
      document.getElementById("contact-form").reset();
    });
  } else {
    // Show error alert if submission fails
    Swal.fire({
      title: "Error!",
      text: "Something Went Wrong. Please Try Again!",
      icon: "error",
      confirmButtonText: "OK"
    });
  }
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

