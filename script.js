const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav');
const close = document.getElementById('close_btn')

hamburger.addEventListener('click', function() {
    navMobile.classList.toggle('active');
})
close.addEventListener('click', () => {
    navMobile.classList.toggle('active');

})