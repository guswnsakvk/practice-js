const list = document.querySelector(".list")
const tab = document.querySelectorAll(".tab-button")
const text = document.querySelectorAll(".tab-content")

for (let i=0; i<tab.length;i++){
  tab[i].addEventListener("click", (event) => {
    for(let j=0;j<tab.length;j++){
      tab[j].classList.remove("active")
      text[j].classList.remove("show")
    }
    tab[i].classList.toggle("active")
    text[i].classList.toggle("show")
  })
}