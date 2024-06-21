//menu mobile 

const menuDiv = document.getElementById('menu-mobile')
          const btn = document.getElementById('btnMenu')
       
        function animar(){
            menuDiv.classList.toggle('abrirMenu')
            btn.classList.toggle('ativar')
        }
        menuDiv.addEventListener('click',animar)

//scroll reveal 


let imagemContainer2 = document.querySelector("#img-container2")
let tituloContainer2 = document.querySelector('.titulo-container2')
let pContainer2 = document.querySelector('.subtitulo-container2')

ScrollReveal().reveal(imagemContainer2,{
  origin : 'left', 
  duration: 2000,
  distance: '10%'
})  

ScrollReveal().reveal(tituloContainer2,{
  origin : 'left', 
  duration: 2000,
  distance: '10%'
})  
ScrollReveal().reveal(pContainer2,{
  origin : 'left', 
  duration: 2000,
  distance: '10%'
})  

let imgContainer3 = document.querySelector('.img-container3')
let subtituloContainer3 =  document.querySelector('#sub')

ScrollReveal().reveal(imgContainer3,{
  origin : 'top', 
  duration: 2000,
  distance: '10%'
})  


  ScrollReveal().reveal('#sub',{
    origin : 'left', 
    duration: 2000,
    distance: '10%'
  })  



  ScrollReveal().reveal('#img-container4',{
    origin : 'bottom', 
    duration: 1000,
    distance: '10%'
  })  

  ScrollReveal().reveal('#h2-container5',{
    origin : 'left', 
    duration: 1000,
    distance: '10%'
  })  

ScrollReveal().reveal('.conteudo-container6',{
  origin : 'right', 
    duration: 1000,
    distance: '20%'
})

ScrollReveal().reveal('.entidade',{
    origin : 'bottom', 
    duration: 2000,
    distance: '20%'
})

ScrollReveal().reveal('.card-container8',{
  origin : 'left', 
  duration: 2000,
  distance: '20%'
})

