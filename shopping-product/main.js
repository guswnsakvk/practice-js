const productTitle = document.querySelectorAll(".product-title")
const productPrice = document.querySelectorAll(".product-price")
const sortPrice = document.querySelector("#sort-price")

let products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
] 

function productInfo() {
  for (let i=0;i<productTitle.length;i++){
    productTitle[i].innerText = products[i].title
    productPrice[i].innerText = products[i].price
  }
}

productInfo()

sortPrice.addEventListener("click", () => {
  products.sort(function(a,b){
    return a.price - b.price
  })
  productInfo()
})