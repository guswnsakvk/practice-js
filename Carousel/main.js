const container = document.querySelector(".slide-container")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btnLeft = document.querySelector(".btnLeft")
const btnRight = document.querySelector(".btnRight")
let count = 0

function slide(){
  container.style.transform = `translateX(${count * -100}vw)`
}

btn1.addEventListener("click", () => {
  container.style.transform = "translateX(0)"
})

btn2.addEventListener("click", () => {
  container.style.transform = "translateX(-100vw)"
})

btn3.addEventListener("click", () => {
  container.style.transform = "translateX(-200vw)"
})

btnLeft.addEventListener("click", () => {
  if (count === 0){
    count = 2
    slide(count)
  }
  else{
    count += -1
    slide(count)
  }
})

btnRight.addEventListener("click", () => {
  if (count === 2){
    count = 0
    slide()
  }
  else{
    count += 1
    slide()
  }
})