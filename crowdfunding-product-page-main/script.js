const hamburger = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close-menu')
const mobileMenu = document.querySelector('.mobile-menu')

const bookmarkIcon = document.querySelector('.bookmark-icon')
const circle = document.querySelector('.circle')
const path = document.querySelector('.path')
const bookmarkButton = document.getElementById('bookmark-button')

const backButton = document.querySelector('.back-project')
const selectionModal = document.querySelector('.modal')
const closeSelectionModal = document.querySelector('.close-modal')

const modalCards = document.querySelectorAll('.modal-card')
const labels = document.querySelectorAll('.label')
const modalCardBottom = document.querySelectorAll('.modal-card-bottom')

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

backButton.addEventListener('click', function() {
    selectionModal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    closeSelectionModal.addEventListener('click', function() {
        selectionModal.style.display = 'none'
        document.body.style.overflow = 'visible'
    })
})

labels.forEach((label, index) => {
    label.addEventListener('click', function() {
        modalCardBottom.forEach((item, i) => {
            if(index === i) {
                item.classList.toggle('active')
                modalCards.forEach((card, j) => {
                    if(j === i && item.classList.contains('active')) {
                        card.style.border = '2px solid hsl(176, 50%, 47%)'
                    } else {
                        card.style.border = '1px solid rgb(235, 235, 235)'
                    }
                })
            } 
        })
    })
})
