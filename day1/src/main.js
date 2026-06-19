import './style.css'
import gsap from 'gsap'



// animation libraries  -> gsap

// STAGGER 

// gsap.to('.box', {
//   x: 1200,
//   duration: 1.3,
//   ease: "power2.inOut",
//   delay: 0.6,
//   stagger: 1,   //delay between the boxes
// })


// gsap.to('.box', {
//   x: 800,
//   duration: 1.3,
//   ease: "power2.inOut",
//   delay: 0.6,
//   stagger: -0.1,   //delay between the boxes (time)
// })


// gsap.to('.box', {
//   x: 1200,
//   duration: 1.3,
//   ease: "power2.inOut",
//   delay: 0.6,
//   stagger: {
//     each: 0.1,
//     from: "random"
//   }
// })



gsap.from('h1 span', {
  yPercent: 100,
  opacity:0,
  duration1: 1.5,
  ease: "expo.out",
  stagger: {
    each: 0.08,
    from: "center"
  }
})

