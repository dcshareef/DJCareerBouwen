// Register-Form
let registerNow = () => {
    const popupForm = document.querySelector('#popupForm')
    popupForm.style.display='block'
}

document.addEventListener('DOMContentLoaded', function() {
    const closePopupBtn = document.querySelector('#closePopupBtn')
    
    closePopupBtn.addEventListener('click',function(){
        popupForm.style.display = 'none'
    })
})


// Register-Form Validation
let formValidate = (event) => {
    let name = document.popupRegForm.name.value.trim()
    let number = document.popupRegForm.number.value.trim()

    if (name=="") {
        document.querySelector('#nameError').innerHTML="name is required"
        document.popupRegForm.name.style.borderColor='red'
        document.popupRegForm.name.focus()
        event.preventDefault()
        return false
    }
    if (number=="") {
        document.querySelector('#numberError').innerHTML="number is required"
        document.popupRegForm.number.style.borderColor='red'
        document.popupRegForm.number.focus()``
        event.preventDefault()
        return false
    }else if (number.length!=10){
        document.querySelector('#numberError').innerHTML="please enter a valid number"
        document.popupRegForm.number.style.borderColor='red'
        document.popupRegForm.number.focus()
        event.preventDefault()
        return false
    }
    return true;
}

// Clear error messages when the user starts typing \\
document.addEventListener('DOMContentLoaded', function () {
    let nameInput = document.querySelector('input[name="name"]');
    let nameError = document.querySelector('#nameError');
    
    let phoneInput = document.querySelector('input[name="number"]');
    let numberError = document.querySelector('#numberError');

    nameInput.addEventListener('input', function () {
        nameError.innerHTML = '';
        this.style.borderColor = 'grey';
    });
    phoneInput.addEventListener('input', function () {
        numberError.innerHTML = '';
        this.style.borderColor = 'grey';
    });
});

// Testimonials
var swiper = new Swiper(".mySwiper", {
    // effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".nextBtn",
        prevEl: ".prevBtn",
    },
});