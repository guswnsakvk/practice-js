const formCheck = document.querySelector("#option1")
const sizeCheck = document.querySelector(".size-select")
const value = document.querySelector("#option2")

let count = 0
const shirtSizes = [95, 100, 105]
const pantsSizes = [28, 30, 32]

function valueReset(time){
  for(let i=0;i<time;i++){
    value.removeChild(value.firstElementChild)
  }
}

formCheck.addEventListener("change", (event) => {
  valueReset(count)
  sizeCheck.classList.remove("hidden")
  if (event.target.value === "셔츠"){
    for(let i=0;i<shirtSizes.length;i++){
      const option = document.createElement("option")
      option.innerText = shirtSizes[i]
      value.append(option)
    }
  }
  else if(event.target.value === "바지"){
    for(let i=0;i<pantsSizes.length;i++){
      const option = document.createElement("option")
      option.innerText = pantsSizes[i]
      value.append(option)
    }
  }
  else{
    sizeCheck.classList.add("hidden")
  }
  count = value.children.length
})