const timer = document.querySelector("h3.timer")

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

function getTime(){
  const xmax = new Date("2021-12-25:00:00:00+0900")
  const now = new Date()
  const gap = xmax - now
  const gap_day = Math.floor(gap / day)
  const gap_hour = String(Math.floor(gap % day / hour)).padStart(2,"0")
  const gap_minute = String(Math.floor(gap % hour / minute)).padStart(2, "0")
  const gap_second = String(Math.floor(gap % minute / second)).padStart(2,"0")
  timer.innerText = `${gap_day}d ${gap_hour}h ${gap_minute}m ${gap_second}s `
}

getTime()
setInterval(getTime, 1000)