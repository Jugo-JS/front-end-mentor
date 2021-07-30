const emailInput = document.querySelector('.input')
const subscribeButton = document.querySelector('.subscribe')
const warning = document.querySelector('.warning')

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

subscribeButton.addEventListener('click', function() {
   if(!emailIsValid(emailInput.value)) {
       warning.style.display = 'block'
   } else {
       warning.style.display = 'none'
   }
})