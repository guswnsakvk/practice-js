const box = document.querySelector(".box")
const btn = document.querySelector(".btnFade")

function fadeIn(el){
  el.classList.add('show')
  el.classList.remove('hide')
}

function fadeOut(el){
  el.classList.add('hide')
  el.classList.remove('show')
}

btn.addEventListener('click', function(){
  if (box.className.indexOf('hide') !== -1){
    fadeIn(box)
    btn.innerText = 'Fade Out'
  }
  else{
    fadeOut(box)
    btn.innerText = 'Fade In'
  }
})