// 이미지 로드 여부에 따른 출력
const img = document.querySelector("#test")

let testPromise1 = new Promise(function(resolve, reject){
  img.addEventListener('load', function(){
    resolve('성공!')
  })
  img.addEventListener('error', function(){
    reject('실패!')
  })
})

testPromise1.then(function(successMessage){
  console.log(successMessage)
}).catch(function(failMessage){
  console.log(failMessage)
})

// Ajax 여부에 따른 출력
let xhr = new XMLHttpRequest()
let testPromise2 = Ajax('https://codingapple1.github.io/hello.txt')

testPromise2.then(function(successMessage){
  console.log(successMessage)
  return Ajax('https://codingapple1.github.io/hello2.txt')
}).then(function(successMessage){
  console.log(successMessage)
}).catch(function(failMessage){
  console.log(failMessage)
})

function Ajax(URL) {
  return new Promise(function(resolve, reject){
    xhr.open('GET', URL, true)
    xhr.send()
    xhr.onload = function(){
      if(xhr.status == 200){
        resolve(xhr.response)
      }
      else{
        reject("통신 실패")
      }
    }
  })
}