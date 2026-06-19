import './style.css'
import gsap from 'gsap'

// gsap.to('.box', {
//   x: 800,
//   duration: 1.5,
//   delay: 0.6,
//   ease: "power2"
// })


// gsap.to('.box', {
//   x: 800,
//   duration: 1.5,
//   delay: 0.6,
//   ease: "elastic"
// })


// gsap.to('.box', {
//   x: 800,
//   duration: 1.5,
//   delay: 0.6,
//   ease: "bounce.inOut"
// })


// gsap.to('.box', {
//   x: 800,
//   duration: 1.5,
//   delay: 0.6,
//   ease: "steps(12)",
//   repeat: -1,
// })



gsap.set(".box", {
  x: -300,
})

gsap.to('.box', {
  x: 1500,
  duration: 1,
  delay: 0.6,
  ease: "power2.inOut",
  repeat: -1,
  // yoyo: true
})



