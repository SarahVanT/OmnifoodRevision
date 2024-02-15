document.addEventListener("DOMContentLoaded", function () {
  var startX, endX;
  // Selecting #carouselExample
  var carouselElement = document.querySelector("#carouselExample");

  // Event listener when user touches the screen
  carouselElement.addEventListener("touchstart", function (e) {
    // horizontal position (X-coordinate) of the touch point
    startX = e.touches[0].clientX;
  });

  // Event listener when user moves finger across the screen
  carouselElement.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault(); // Prevent scrolling when inside DIV
    },
    { passive: false }
  );

  // Event listener when user lifts finger off the screen
  carouselElement.addEventListener("touchend", function (e) {
    // horizontal position (X-coordinate) of the touch ended point
    endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
      // Swipe left, next slide
      $(".carousel").carousel("next");
    } else if (endX - startX > 50) {
      // Swipe right, previous slide
      $(".carousel").carousel("prev");
    }
  });
});
