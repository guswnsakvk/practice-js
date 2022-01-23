const product = document.querySelector("h4")
const price = document.querySelector("p")
const btn = document.querySelector(".btn")
let test = [{brand:'BMW'}, {model:520}]

product.innerText = test[0].brand
price.innerText = test[1].model

btn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://codingapple1.github.io/data.json', true)
  xhr.send()
  xhr.onload = (data) => {
    if(xhr.status ==200){
      console.log(data.target.response)
      const jsonObj = JSON.parse(data.target.response)
      console.log(jsonObj.brand)
    }
  }
})