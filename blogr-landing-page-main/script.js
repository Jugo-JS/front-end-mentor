const product = document.querySelector(".product")
const nav_product =  document.querySelector('.nav-product')
const product_icon = document.getElementById('product-icon')
const company = document.querySelector(".company")
const nav_company =  document.querySelector('.nav-company')
const company_icon = document.getElementById('company-icon')
const connect = document.querySelector(".connect")
const nav_connect =  document.querySelector('.nav-connect')
const connect_icon = document.getElementById('connect-icon')

const hamburger_menu = document.querySelector('.hamburger-menu')
const menu_closed = document.querySelector('.menu-closed')
const mobile_nav = document.querySelector('.mobile-nav')

product.addEventListener('click', function() {
    nav_product.classList.toggle('hidden')
    product_icon.classList.toggle('rotated')
})

company.addEventListener('click', function() {
    nav_company.classList.toggle('hidden')
    company_icon.classList.toggle('rotated')
})

connect.addEventListener('click', function() {
    nav_connect.classList.toggle('hidden')
    connect_icon.classList.toggle('rotated')
})

hamburger_menu.addEventListener('click', function() {
    hamburger_menu.classList.add('hidden')
    menu_closed.classList.remove('hidden')
    mobile_nav.classList.add('active')
})

menu_closed.addEventListener('click', function() {
    menu_closed.classList.add('hidden')
    hamburger_menu.classList.remove('hidden')
    mobile_nav.classList.remove('active')
})