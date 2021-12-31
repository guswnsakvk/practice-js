const nav = document.querySelector(".navbar")
const btn = document.querySelector(".top")

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100){
    nav.classList.add("scrollEffect")
  }
  else{
    nav.classList.remove("scrollEffect")
  }
})

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})