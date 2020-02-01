/* Assign Varialbes */
const btnHamburger = document.querySelector('#header .hamburger');
const menu = document.querySelector('#main-nav');
/* Event Listenters */
btnHamburger.addEventListener('click', function() {
    menu.classList.toggle('open');
    btnHamburger.classList.toggle('sticky');
})