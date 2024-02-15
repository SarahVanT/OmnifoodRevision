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
