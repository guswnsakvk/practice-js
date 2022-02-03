const btn = document.querySelector("button")

async function test() {
  let test = new Promise(function(success, fail){
    btn.addEventListener("click", function(){
      success("성공")
    })
  })
  try{
    const result = await test
    console.log(result)
  } catch{
    console.log("실패")
  }
}

test()