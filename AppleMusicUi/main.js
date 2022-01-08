const cardBoxs = document.querySelectorAll(".card-box")

window.addEventListener("scroll", () => {
  let windowY = window.scrollY
  let card1Y = -1/500 * windowY + 115/50
  let card2Y = -1/500 * windowY + 165/50
  let card1z = (-1/5000) * windowY + 565/500
  let card2z = (-1/5000) * windowY + 665/500
  
  cardBoxs[0].style.opacity = card1Y
  cardBoxs[0].style.transform = `scale(${card1z})`
  cardBoxs[1].style.opacity = card2Y
  cardBoxs[1].style.transform = `scale(${card2z})`
})