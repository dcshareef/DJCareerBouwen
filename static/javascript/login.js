// Carousel
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});



// Form Validation
let validateForm = (event) => {
    let username = document.loginForm.username.value.trim()
    let password = document.loginForm.password.value.trim()

    if(username == "") {
        document.querySelector('#usernameError').innerHTML='username is required'
        document.loginForm.username.style.borderColor='#e67a7a'
        document.loginForm.username.focus()
        event.preventDefault()
        return false
    }
    if(password == "") {
        document.querySelector('#passwordError').innerHTML='enter your password'
        document.loginForm.password.style.borderColor='#e67a7a'
        document.loginForm.password.focus()
        event.preventDefault()
        return false
    }
    return true
}


// Clear error messages when the user starts typing
document.addEventListener('DOMContentLoaded', function () {
    let nameInput = document.querySelector('input[name="username"]');
    let nameError = document.querySelector('#usernameError');

    let passwordInput = document.querySelector('input[name="password"]');
    let passwordError = document.querySelector('#passwordError');
    
    nameInput.addEventListener('input', function () {
        nameError.innerHTML = '';
        this.style.borderColor = 'grey';
    });
    passwordInput.addEventListener('input', function () {
        passwordError.innerHTML = '';
        this.style.borderColor = 'grey';
    });
});