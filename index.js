let btnIconMenu = document.getElementById('btn-icon-menu')
let abrirMenu = document.getElementById('menu-mobile')
let overlayMenu = document.getElementById('overlay-menu')

btnIconMenu.addEventListener('click', ()=>{
    abrirMenu.classList.add('abrir-menu')
})

abrirMenu.addEventListener('click', ()=>{
    abrirMenu.classList.remove('abrir-menu')
})

overlayMenu.addEventListener('click', ()=>{
    abrirMenu.classList.remove('abrir-menu')
})

