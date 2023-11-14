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
    let name = document.regForm.name.value.trim()
    let email = document.regForm.email.value.trim()
    let password = document.regForm.password.value.trim()
    let password1 = document.regForm.password1.value.trim()

    if(name == "") {
        document.querySelector('#nameError').innerHTML='name is required'
        document.regForm.name.style.borderColor='#e67a7a'
        document.regForm.name.focus()
        event.preventDefault()
        return false
    }
    if(email == "") {
        document.querySelector('#emailError').innerHTML='email is required'
        document.regForm.email.focus()
        document.regForm.email.style.borderColor='#e67a7a'
        event.preventDefault()
        return false
    }
    if(password == "") {
        document.querySelector('#passwordError').innerHTML='enter your password'
        document.regForm.password.style.borderColor='#e67a7a'
        document.regForm.password.focus()
        event.preventDefault()
        return false
    }
    if(password.length<6){
        document.querySelector('#passwordError').innerHTML='must have at least 6 characters'
        document.regForm.password1.style.borderColor='#e67a7a'
        document.regForm.password.focus()
        event.preventDefault()
        return false
    }
    if(password1==""){
        document.querySelector('#password1Error').innerHTML='please confirm the passord'
        document.regForm.password1.focus()
        event.preventDefault()
        return false
    }
    if(password1!=password) {
        document.querySelector('#password1Error').innerHTML='password is not matching'
        document.regForm.password1.focus()
        event.preventDefault()
        return false
    }
    return true
}


// Clear error messages when the user starts typing
document.addEventListener('DOMContentLoaded', function () {
    let nameInput = document.querySelector('input[name="name"]');
    let nameError = document.querySelector('#nameError');

    let emailInput = document.querySelector('input[name="email"]');
    let emailError = document.querySelector('#emailError');

    let passwordInput = document.querySelector('input[name="password"]');
    let passwordError = document.querySelector('#passwordError');

    let password1Input = document.querySelector('input[name="password1"]');
    let password1Error = document.querySelector('#password1Error');
    
    nameInput.addEventListener('input', function () {
        nameError.innerHTML = '';
        this.style.borderColor = 'grey';
    });
    emailInput.addEventListener('input', function () {
        emailError.innerHTML = '';
        this.style.borderColor = 'grey';
    });
    passwordInput.addEventListener('input', function () {
        passwordError.innerHTML = '';
        this.style.borderColor = 'grey';
    });
    password1Input.addEventListener('input', function () {
        password1Error.innerHTML = '';
        this.style.borderColor = 'grey';
    });
});