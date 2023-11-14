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