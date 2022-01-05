const sortPrice = document.querySelector("#sort-price")
const cardGroup = document.querySelector(".card-group")

let products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
]
let count = products.length

function printCard(count){
  for (i=0;i<count;i++){
    const card = document.createElement("div")
    card.classList.add("card")
    const img = document.createElement("img")
    img.src = "https://via.placeholder.com/600"
    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    const h5 = document.createElement("h5")
    h5.classList.add("product-title")
    const p = document.createElement("p")
    p.classList.add("product-price")
    const btn = document.createElement("button")
    btn.innerText = "주문하기"
    btn.classList.add("btn")
    btn.classList.add("btn-danger")
    cardBody.append(h5)
    cardBody.append(p)
    cardBody.append(btn)
    card.append(img)
    card.append(cardBody)
    cardGroup.append(card)
  } 
}

function productInfo(array) {
  const productTitle = document.querySelectorAll(".product-title")
  const productPrice = document.querySelectorAll(".product-price")
  for (let i=0;i<array.length;i++){
    productTitle[i].innerText = products[i].title
    productPrice[i].innerText = products[i].price
  }
}

printCard(count)
productInfo(products)

sortPrice.addEventListener("click", () => {
  products.sort(function(a,b){
    return a.price - b.price
  })
  productInfo(products)
})