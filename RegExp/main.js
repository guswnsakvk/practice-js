const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const email = document.querySelector(".email")
const phone = document.querySelector(".phone")
const emailResult = document.querySelector(".emailResult")
const phoneResult = document.querySelector(".phoneResult")

function checkEmail(event) {
  event.preventDefault()
  if(/\S+@\S+\.\S+/.test(email.value) == true) {
    emailResult.innerText = "통과"
  }
  else{
    emailResult.innerText = "예시대로 입력해주세요"
  }
}

function checkPhone(event) {
  event.preventDefault()
  if(/[0-9]{3}-[0-9]{4}-[0-9]{4}/.test(phone.value) == true){
    phoneResult.innerText = "통과"
  }
  else{
    phoneResult.innerHTML = "예시대로 입력해주세요"
  }
}

box1.addEventListener("submit", checkEmail)

box2.addEventListener("submit", checkPhone)