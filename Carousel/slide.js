var image1 = document.querySelectorAll('.slide-box img')[0];

var mc = new Hammer.Manager(image1);
mc.add(new Hammer.Pan({ threshold: 0 }));
    
mc.on('pan', ()=>{
  console.log("이미자 pan되었어요")
})
// mc.on('pan', function(e){
//   console.log("이미자가 pan되었어요") 
// })