const formCheck = document.querySelector("#option1")
const sizeCheck = document.querySelector(".size-select")
const value = document.querySelector("#option2")

formCheck.addEventListener("change", (event) => {
  sizeCheck.classList.remove("hidden")
  if (event.target.value === "셔츠"){
    const option1 = document.createElement("option")
    option1.innerText = 95
    value.append(option1)
    const option2 = document.createElement("option")
    option2.innerText = 100
    value.append(option2)
    const option3 = document.createElement("option")
    option3.innerText = 105
    value.append(option3)
  }
  else{
    const option1 = document.createElement("option")
    option1.innerText = 28
    value.append(option1)
    const option2 = document.createElement("option")
    option2.innerText = 30
    value.append(option2)
    const option3 = document.createElement("option")
    option3.innerText = 32
    value.append(option3)
  }
})