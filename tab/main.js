const list = document.querySelector(".list")
const tab = document.querySelectorAll(".tab-button")
const text = document.querySelectorAll(".tab-content")

// for문 tab기능
// for (let i=0; i<tab.length;i++){
//   tab[i].addEventListener("click", (event) => {
//     for(let j=0;j<tab.length;j++){
//       tab[j].classList.remove("active")
//       text[j].classList.remove("show")
//     }
//     tab[i].classList.toggle("active")
//     text[i].classList.toggle("show")
//   })
// }

function checkTab(value){
  for (let i=0;i<tab.length;i++){  
    tab[i].classList.remove("active")
    text[i].classList.remove("show")
  }
  tab[value].classList.add("active")
  text[value].classList.add("show")
}

list.addEventListener("click", (event) => {
  for(let i=0; i<tab.length;i++){
    if (event.target === tab[i]){
      checkTab(i)
    }
  }
})