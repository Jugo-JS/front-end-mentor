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

const mobile_product = document.querySelector('.mobile-product')
const mobile_product_arrow = document.getElementById('mobile-product-arrow')
const product_mobile_menu = document.querySelector('.product-mobile-menu')

const mobile_company = document.querySelector('.mobile-company')
const mobile_company_arrow = document.getElementById('mobile-company-arrow')
const company_mobile_menu = document.querySelector('.company-mobile-menu')

const mobile_connect = document.querySelector('.mobile-connect')
const mobile_connect_arrow = document.getElementById('mobile-connect-arrow')
const connect_mobile_menu = document.querySelector('.connect-mobile-menu')

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

mobile_product.addEventListener('click', function() {
    product_mobile_menu.classList.toggle('hidden')
    mobile_product_arrow.classList.toggle('rotated')
})

mobile_company.addEventListener('click', function() {
    company_mobile_menu.classList.toggle('hidden')
    mobile_company_arrow.classList.toggle('rotated')
})

mobile_connect.addEventListener('click', function() {
    connect_mobile_menu.classList.toggle('hidden')
    mobile_connect_arrow.classList.toggle('rotated')
})


