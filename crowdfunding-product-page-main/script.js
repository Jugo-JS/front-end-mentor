const hamburger = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close-menu')
const mobileMenu = document.querySelector('.mobile-menu')

const bookmarkIcon = document.querySelector('.bookmark-icon')
const bookmarkButton = document.getElementById('bookmark-button')

hamburger.addEventListener('click', function() {
    mobileMenu.style.display = 'block'
    hamburger.style.display = 'none'
    closeMenu.style.display = 'block'
   document.body.style.overflow = 'hidden'
    closeMenu.addEventListener('click', function() {
        mobileMenu.style.display = 'none'
        hamburger.style.display = 'block'
        closeMenu.style.display =  'none'
        document.body.style.overflow = 'scroll'
    })
})

bookmarkButton.addEventListener('click', function() {
    console.log('click')
})