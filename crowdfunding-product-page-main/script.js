const hamburger = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close-menu')
const mobileMenu = document.querySelector('.mobile-menu')

const bookmarkIcon = document.querySelector('.bookmark-icon')
const circle = document.querySelector('.circle')
const path = document.querySelector('.path')
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
    circle.style.fill = 'hsl(176, 72%, 28%)'
    path.style.fill = 'white'
    bookmarkButton.style.color = 'hsl(176, 72%, 28%)'
    bookmarkButton.style.fontWeight = '700'
    bookmarkButton.style.textAlign = 'right'
    bookmarkButton.textContent = 'Bookmarked'
})