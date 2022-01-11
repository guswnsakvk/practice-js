const image1 = document.querySelectorAll('.slide-box img')[0];
const container = document.querySelector(".slide-container")

const mc = new Hammer.Manager(image1);
mc.add(new Hammer.Pan({ threshold: 0 }));
    
function slide(value){
  container.style.transform = `translateX(${value}px)`
}

function slide2(){
  container.style.transform = "translateX(-100vw)"
}

mc.on('pan', (e)=>{
  const move = e.deltaX
  if(move < -1){
    slide(e.deltaX)
    if(e.isFinal){
      container.classList.add("transforming")
      slide2()
      setTimeout(() => {
        container.classList.remove("transforming")
      },500)
    }
  }
})

