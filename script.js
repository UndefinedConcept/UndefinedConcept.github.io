// Current Javascript Features
// Hide Nav Bar when scrolling down
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const hideThreshold = 100; // Number of pixels to scroll before hiding

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > hideThreshold) {
        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-50px"; // Hide the navbar
        } else {
            navbar.style.top = "0"; // Show the navbar
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});