import './style.css'
import gsap from 'gsap'


gsap.set(".box", {
  x: -300,
})


// gsap.to('.box', {
//   x: 500,
//   delay: 0.6,
//   duration: 1.4,
//   ease: "power2.inOut",


//   onStart: ()=>{
//     console.log("Animation started");
//   },

//   onComplete: ()=>{
//     console.log("Animation completed adi!");
    
//   }
// })

// gsap.to('.box', {
//   x: 500,
//   delay: 0.6,
//   duration: 1.4,
//   ease: "power2.inOut",


//   onStart: ()=>{
//     console.log("Animation started");
//   },

//   onComplete: ()=>{
//     gsap.to(".box", {
//       y:300
//     })
    
//   }
// })


gsap.to('.box', {
  x: 500,
  delay: 0.6,
  duration: 1.4,
  ease: "power2.inOut",


  onStart: ()=>{
    console.log("Animation started");
  },

  onUpdate: ()=>{
    console.log("frames");
  }
})


