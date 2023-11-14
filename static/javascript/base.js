// Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector('header')

let isSticky = false;

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (isSticky) {
        header.style.position = 'static';
        isSticky = false;
    } else {
        header.style.position = 'sticky';
        isSticky = true;
    }
});