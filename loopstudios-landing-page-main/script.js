const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.close-menu')

hamburger.addEventListener('click', function() {
    mobileMenu.style.transform = 'translateX(0)'
    closeMenu.addEventListener('click', function() {
        mobileMenu.style.transform = 'translateX(-100%)'
    })
})