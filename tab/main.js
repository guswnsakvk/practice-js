const list = document.querySelector(".list")
const tab = document.querySelectorAll(".tab-button")
const text = document.querySelectorAll(".tab-content")

tab[0].addEventListener("click", (event) => {
  tab[0].classList.toggle("active")
  text[0].classList.toggle("show")
})

tab[1].addEventListener("click", (event) => {
  tab[1].classList.toggle("active")
  text[1].classList.toggle("show")
})

tab[2].addEventListener("click", (event) => {
  tab[2].classList.toggle("active")
  text[2].classList.toggle("show")
})

// list.addEventListener("click", (event) => {
//   event.target.classList.toggle("active")
// })