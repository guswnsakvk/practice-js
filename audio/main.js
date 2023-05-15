const audio = document.querySelector('.audio')
const select = document.querySelector('.select')
const btn = document.querySelector('.btn')
const play_btn = document.querySelector('.play-btn')
const pause_btn = document.querySelector('.pause-btn')
const pre_btn = document.querySelector('.pre-btn')
const next_btn = document.querySelector('.next-btn')
const music_list = ['music/Leo.mp3', 'music/Betelgeuse.mp3', 'music/Dry_flower.mp3']
let num = 0

console.log(audio.src)
console.log(select)
console.log(play_btn)
console.log(pause_btn)

select.addEventListener('click', (e) => {
  console.log(e.target.value)
  audio.src = e.target.value
})

btn.addEventListener('click', () => {
  audio.src = 'music/Leo.mp3'
})

play_btn.addEventListener('click', () => {
  audio.play()
})

pause_btn.addEventListener('click', () => {
  audio.pause()
})

pre_btn.addEventListener('click', () => {
  if(num !== 0){
    num -= 1
  } else{
    num = 2
  }
  audio.src = music_list[num]
})

next_btn.addEventListener('click', () => {
  if(num !== 2){
    num += 1
  } else{
    num = 0
  }
  audio.src = music_list[num]
})