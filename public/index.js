const menu = document.getElementById('menu')
const nav = document.getElementById('nav')
const header = document.getElementById('header')
const main = document.getElementById('main')
const toMain = document.getElementById('to-main')
const topLink = document.getElementById('top-link')

menu.addEventListener('click', ()=>{
  let contains = nav.classList.contains('translate-x-[125%]')
  if(contains) {
    nav.classList.replace('translate-x-[125%]', 'translate-x-[0%]')
  } else {
    nav.classList.replace('translate-x-[0%]', 'translate-x-[125%]')
    
  }
})

toMain.addEventListener('click', ()=> {
  const pos = header.getBoundingClientRect().height

  window.scrollTo({
    left: 0,
    top: pos,
  })
})

window.addEventListener('DOMContentLoaded', ()=> {
  topLink.style.visibility = 'hidden' 
})

window.addEventListener('scroll', ()=> {
  const posY = window.scrollY

  if(posY > 600){
    topLink.style.visibility = 'visible'
  } else {
    topLink.style.visibility = 'hidden'    
  }
})

topLink.addEventListener('click', ()=> {
  window.scrollTo({
    left:0, 
    top:0
  })
})
