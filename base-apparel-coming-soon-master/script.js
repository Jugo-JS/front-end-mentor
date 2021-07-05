const input = document.getElementById('email_input')
const button = document.getElementById('submit_button')
const error = document.querySelector('.error')
const warning = document.querySelector('.warning')

const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email)
}

const showErrors = () => {
    error.classList.remove('hidden')
    warning.classList.remove('hidden')
}

const hideErrors = () => {
    error.classList.add('hidden')
    warning.classList.add('hidden')
    input.value = ''
}

button.addEventListener('click', function() {
    if(!input.value) {
        showErrors()
        setTimeout(function() {
            hideErrors()
        }, 3000)
    } 
    else {
        if(!isEmailValid(input.value)) {
            showErrors()
            setTimeout(function() {
            hideErrors()
        }, 3000)
        }
    }
})


