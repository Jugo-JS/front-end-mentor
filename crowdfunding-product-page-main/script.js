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
const radioBtns = document.querySelectorAll('.radio-input')

const selectBtns = document.querySelectorAll('.selectBtn')

const continueBtns = document.querySelectorAll('.continueBtn')
const successModal = document.querySelector('.success-modal')
const finishBtn = document.querySelector('.finish')

let collectedMoney = Number(document.getElementById('money').textContent)
const totalAmount = Number(document.getElementById('totalAmount').textContent)
let backers = Number(document.getElementById('backers').textContent)
const noReward = document.getElementById('no-reward')
const bamboo = document.getElementById('bamboo')
const black = document.getElementById('black')
const blueLine = document.querySelector('.blue-line')

let bambooLeft = Number(document.getElementById('bamboo-left').textContent)
let blackLeft = Number(document.getElementById('black-left').textContent)
let modalBambooLeft = Number(document.getElementById('modal-bamboo-left').textContent)
let modalBlackLeft = Number(document.getElementById('modal-black-left').textContent)

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

const mainModal = () => {
    document.documentElement.scrollTop = 0
    selectionModal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    closeSelectionModal.addEventListener('click', function() {
        selectionModal.style.display = 'none'
        document.body.style.overflow = 'visible'
    })
}

backButton.addEventListener('click', mainModal)

labels.forEach((label, index) => {
    label.addEventListener('click', function() {
        modalCardBottom[index].classList.toggle('active')
        if(modalCardBottom[index].classList.contains('active')) {
            modalCards[index].style.border = '2px solid hsl(176, 50%, 47%)'
            radioBtns[index].checked =  true
        } else {
            modalCards[index].style.border = '1px solid rgb(235, 235, 235)'
            radioBtns[index].checked =  false
        }       
    })  
})

radioBtns.forEach((btn, i) => {
    btn.addEventListener('click', function() {
        if(btn.checked) {
            modalCardBottom[i].classList.add('active')
            modalCards[i].style.border = '2px solid hsl(176, 50%, 47%)'
        }
        if(!btn.checked) {
            modalCardBottom[i].classList.remove('active')
            modalCards[i].style.border = '1px solid rgb(235, 235, 235)'
        }
    })
})

selectBtns.forEach(btn => {
    btn.addEventListener('click', mainModal)
})

continueBtns.forEach((btn, i) => {
    btn.addEventListener('click', function() {
        selectionModal.style.display = 'none'
        successModal.style.display = 'block'
         document.body.style.overflow = 'hidden'
         if(i === 0) {
             collectedMoney += Number(noReward.value)
             backers += 1
         } else if(i === 1) {
             collectedMoney += Number(bamboo.value)
             backers += 1
             bambooLeft -= 1
             modalBambooLeft -= 1
         } else if (i === 2) {
             collectedMoney += Number(black.value)
             backers += 1
             blackLeft -= 1
             modalBlackLeft -= 1
         }
         document.getElementById('money').textContent = collectedMoney
         document.getElementById('backers').textContent = backers
         document.getElementById('bamboo-left').textContent = bambooLeft
         document.getElementById('black-left').textContent = blackLeft
         document.getElementById('modal-bamboo-left').textContent = modalBambooLeft
         document.getElementById('modal-black-left').textContent = modalBlackLeft
         let lineWidth = (collectedMoney/totalAmount) * 100
         blueLine.style.width = `${lineWidth.toString()}%`
    })
})

finishBtn.addEventListener('click', function() {
    successModal.style.display = 'none'
    document.body.style.overflow = 'visible'
})
