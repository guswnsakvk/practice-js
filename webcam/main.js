const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snap_btn = document.getElementById('snap-btn');
const webcam = new Webcam(webcamElement, 'user', canvasElement);

webcam.start()
   .then(result =>{
      console.log("webcam started");
   })
   .catch(err => {
       console.log(err);
   });

function take_picture(){
  let picture = webcam.snap()
  document.querySelector("a").href = picture
}

snap_btn.addEventListener("click", () =>{
  console.log('click')
  take_picture()
})