const input = document.querySelector("input")
const getValue = document.querySelector(".getValue")
const dataObj = {}
const h1 = document.querySelector("h1")
// let count = 1

getValue.addEventListener("submit", function(event){
  event.preventDefault()
  const lst = [...input.value].sort()
  // for(let i=1;i<=lst.length;i++){
  //   if(lst[i-1] != lst[i]){
  //     dataObj[lst[i-1]] = count
  //     count = 1
  //   } else{
  //     count += 1
  //   }
  // }
  lst.forEach(function(element){
    if(dataObj[element] > 0){
      dataObj[element]++
    } else{
      dataObj[element] = 1
    }
  })
  console.log(dataObj)
})