const recordButton = document.querySelector(".record-button")
const stopButton = document.querySelector(".stop-button")
const playButton = document.querySelector(".play-button")
const downloadButton = document.querySelector(".download-button")
const recording = document.querySelector("#recording")
const preview = document.querySelector('#preview')

let recorder
let chunks

function videoStart(){
  navigator.mediaDevices.getUserMedia({video : true, audio : true})
  .then((stream) => {
    console.log(stream)
    recording.srcObject = stream
    recordingStart(recording.captureStream())
  })
}

function recordingStart(stream){
  console.log(stream)
  chunks = []
  recorder = new MediaRecorder(stream)
  recorder.ondataavailable  = (e) => {
    chunks.push(e.data)
  }
  recorder.start()
}

function recordingStop(){
  console.log(recording.srcObject.getTracks())
  recording.srcObject.getTracks().forEach(stream => {
    stream.stop()
  });
  recorder.stop()
}

function shoeRecord(){
  const blob = new Blob(chunks, {type : "video/webm"})
  console.log(blob)
  preview.src = URL.createObjectURL(blob)
  preview.play()
  downloadButton.href = preview.src
  downloadButton.download = `recording_${new Date()}`
}

recordButton.addEventListener('click', videoStart)
stopButton.addEventListener('click', recordingStop)
playButton.addEventListener('click', shoeRecord)