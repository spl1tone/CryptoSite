document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var windowHeight = window.innerHeight;

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;

        // Calculate the index of the current slide based on the scroll position
        var currentSlideIndex = Math.floor(scrollPosition / windowHeight);

        // Set the background image of the body to the background image of the current slide
        document.body.style.backgroundImage = slides[currentSlideIndex].style.backgroundImage;
    });
});