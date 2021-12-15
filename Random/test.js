const range = document.querySelector(".getNumber .range .select")
const guessForm = document.querySelector(".guess-form")
const guess = document.querySelector(".guess-form .guess .guessNum")
const info = document.querySelector(".result_info")
const result = document.querySelector(".result")

function randomNum(maxNum, guessNum){
  const answer = Math.floor(Math.random() * (maxNum+1))
  if (answer > guessNum){
    info.innerText = `You chose: ${guessNum}, the machine chose: ${answer}`
    result.innerText = "You lose!"
  }
  else if (answer < guessNum){
    info.innerText = `You chose: ${guessNum}, the machine chose: ${answer}.`
    result.innerText = "You lose!"
  }
  else{
    info.innerText = `You chose: ${guessNum}, the machine chose: ${answer}.`
    result.innerText = "You won!"
  }
}

function playGame(event){
   event.preventDefault()
   const maxNum = parseInt(range.value, 10)
   const guessNum = parseInt(guess.value, 10)
   randomNum(maxNum, guessNum)
}

guessForm.addEventListener("submit", playGame)