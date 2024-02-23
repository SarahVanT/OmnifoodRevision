document.addEventListener("DOMContentLoaded", function () {
  var startX, endX;
  var carouselElement = document.querySelector("#carouselExample");

  // Ensure the carousel is initialized
  var carouselInstance = new bootstrap.Carousel(carouselElement);

  carouselElement.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });

  carouselElement.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault(); // Prevent scrolling when inside DIV
    },
    { passive: false }
  );

  carouselElement.addEventListener("touchend", function (e) {
    endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
      // Swipe left, next slide
      carouselInstance.next();
    } else if (endX - startX > 50) {
      // Swipe right, previous slide
      carouselInstance.prev();
    }
  });
});

// const email = document.getElementById("emailInput");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity(
//       "Error! Email address format is incorrect. Please enter in the format name@domain.com."
//     );
//   } else {
//     email.setCustomValidity("");
//   }
// });

const email = document.getElementById("emailInput");
const messageContainer = document.getElementById("messageContainer");

document
  .getElementById("subscription")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // Clear the message container first to remove any previous messages
    messageContainer.innerHTML = "";

    if (email.value !== "") {
      // Insert the success message into the messageContainer div
      messageContainer.innerHTML = `<p role="alert" id="success">Thanks for signing up! You'll now receive updates in your inbox every week.</p>`;

      email.value = ""; // Clear the email input field
    }
  });

email.addEventListener("invalid", (e) => {
  // Clear any previous custom validity message
  email.setCustomValidity("");

  // Set a new custom validity message based on the specific error
  if (email.validity.valueMissing) {
    email.setCustomValidity(
      "Error! Email blank. Please enter your Email Address so we know where to email."
    );
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity(
      "Error! Email address format is incorrect. Please enter in the format name@domain.com."
    );
  }
});

email.addEventListener("input", (e) => {
  // Clear the custom validity message when the user starts correcting the input
  email.setCustomValidity("");
});
