/* Assign Varialbes */
const btnHamburger = document.querySelector('#header .hamburger');
const menu = document.querySelector('#main-nav');
const menuItems = document.querySelectorAll('.menu-item');

/* Active Menu Item */
menuItems.forEach(function(item) {

    item.addEventListener('click', function() {
        // The active button
        let active = document.querySelector('.active-menu-item');
        // The cuurent button clicked
        let current = this;
        // Update classes
        active.classList.remove('active-menu-item');
        current.classList.add('active-menu-item');

        // Close menu on moblie
        if (screen.width <= 768) {
            setTimeout(function() {
                menu.classList.toggle('open');
                btnHamburger.classList.toggle('pressed');
            }, 300);
        }
    });

});

/* Desktop - Show menu on scroll up */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            menu.style.top = "0";
        } else {
            menu.style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
};



/* Mobile - open\close menu */

btnHamburger.addEventListener('click', function() {
    menu.classList.toggle('open');
    btnHamburger.classList.toggle('pressed');
});