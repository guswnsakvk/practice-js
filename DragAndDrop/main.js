function ondragstart_handler(event){
  event.dataTransfer.setData("test", event.target.id);
  console.log("dragStart")
}

function ondragover_handler(event){
  event.preventDefault()
  event.dataTransfer.dropEffect = "move"
}

function ondrop_handler(event){
  const data = event.dataTransfer.getData("test")
  const test1 = document.querySelector(`#${data}`)
  const test2 = document.querySelector(`#${data} img`)
  console.log(test1.parentNode.id)
  console.log(test1.innerText)
  console.log(test2.src)
}