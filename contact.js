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
  if (name.length < 2) {
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
  // const phone = document.getElementById("phone").value;
  // if (phone.length !== 10) {
  //   seterror("errormsg3", "*Phone number must be 10 digits.");
  //   returnval = false;
  // }
  // if (!regex2.test(phone)) {
  //   seterror("errormsg3", "*Phone number must contain only numeric digits.");
  //   returnval = false;
  // }

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

  const btn = document.getElementById("btn");

  // Show spinner and disable button
  btn.style.display = "none";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const payload = { name, email, message };

  try {
    let res;
    let responseOk = false;
    let lastError = null;

    // Try URL4 first
    try {
      res = await fetch(`${backendService.URL4}/api/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      // Check if response is ok (status 200-299)
      if (res.ok) {
        responseOk = true;
      } else {
        // Store the error response but don't throw yet
        lastError = { res, status: res.status };
      
      }
    } catch (networkError) {
      lastError = networkError;
    }

    // If URL4 failed (either network error or bad status code), try URL5
    if (!responseOk) {
      try {
   
        res = await fetch(`${backendService.URL5}/api/contact-us`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          responseOk = true;
        } else {
          lastError = { res, status: res.status };
        }
      } catch (networkError) {

        lastError = networkError;
      }
    }

    // If both servers failed
    if (!responseOk) {
      throw lastError;
    }

    // Success - process the response
    const data = await res.json();

    if (res.status === 200) {
      Swal.fire({
        title: "Success!",
        text: `${data.message}`,
        icon: "success",
        confirmButtonText: "OK"
      }).then(() => {
        document.getElementById("contact-form").reset();
      });
    }

  } catch (err) {

    // Check if it's an HTTP error response with a status
    if (err && err.res && err.res.status === 400) {
      const data = await err.res.json();
      Swal.fire({
        title: "Warning!",
        text: `${data.message || "Validation failed"}`,
        icon: "warning",
        confirmButtonText: "OK"
      });
    } else if (err && err.res && err.res.status === 500) {
      const data = await err.res.json();
      Swal.fire({
        title: "Server Error!",
        text: `${data.message || "Internal server error. Please try again later."}`,
        icon: "error",
        confirmButtonText: "OK"
      });
    } else {
      // Network error or unknown error
      Swal.fire({
        title: "Error!",
        text: "Unable to connect to server. Please check your internet connection and try again.",
        icon: "error",
        confirmButtonText: "OK"
      });
    }

  } finally {
    btn.style.display = "inline";
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

