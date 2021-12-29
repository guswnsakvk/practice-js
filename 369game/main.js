const getNumber = document.querySelector(".getNumber")
const input = document.querySelector("input")
const text = document.querySelector("p")

let count = 0

function result(item) {
  if (item === '3' || item ==='6' || item === '9'){
    return count += 1
  }
}

getNumber.addEventListener("submit", function(event) {
  event.preventDefault()
  count = 0
  const numbers = String(input.value).split('')
  numbers.forEach(result)
  if (count !== 0){
    text.innerText = '박수 '.repeat(count)
  }
  else{
    text.innerText = "통과"
  }
})