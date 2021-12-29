const box = document.querySelector(".box")
const btn = document.querySelector(".btn")

btn.addEventListener("click", ()=> {
  box.classList.toggle("slide")
})