const btn = document.querySelector("button")
const text = document.querySelector("h1")

const textList = String(text.innerText).split('')

btn.addEventListener("click", ()=>{
  text.innerText = ''
  for(let i=0;i<textList.length;i++){
    setTimeout(function(){
      text.innerText += textList[i]
    }, 500 * (i+1))
  }
})