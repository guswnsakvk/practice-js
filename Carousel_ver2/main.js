const container = document.querySelector('.container')
const pre = document.querySelector('.pre')
const next = document.querySelector('.next')

console.log(container)
console.log(pre)
console.log(next)

pre.addEventListener('click', translateContainer.bind(this, 1))
next.addEventListener('click', translateContainer.bind(this, -1))

function translateContainer(direction){
  console.log(direction)
  const selectedBtn = (direction === 1) ? 'pre' : 'next'
  container.style.transitionDuration = '500ms'
  container.style.transform = `translateX(${direction * 120}px)`
  container.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn){
  container.removeAttribute('style');
  (selectedBtn === 'pre') ? 
  container.insertBefore(container.lastElementChild, container.firstElementChild) : 
  container.appendChild(container.firstElementChild, container.lastElementChild)
}