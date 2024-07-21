const menuDiv = document.getElementById('menu-mobile')
const btn = document.getElementById('btnMenu')
       
function animar(){
    menuDiv.classList.toggle('abrirMenu')
    btn.classList.toggle('ativar')
}
menuDiv.addEventListener('click',animar)


ScrollReveal().reveal('#paroid',{
    origin: 'left',
    duration: 2000,
    distance: '10%'
})
