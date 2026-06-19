import './style.css'
import gsap from 'gsap'

// timeline ------------------------------------------------------------------------------------------------




const tl= gsap.timeline();

// tl.to(".box", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
//   delay: 0.6
// }).to(".box1", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
// }).to(".box2", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
// }).to(".box3", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
// })


// position parameters ------------------------------------------------------------------------------------------------


// "<" "<0.2"

// tl.to(".box", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
//   delay: 0.6
// }).to(".box1", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
// },"<").to(".box2", { 
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
// }).to(".box3", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
// }, "<0.2")


// "-=" "+="


// tl.to(".box", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
//   delay: 0.6
// }).to(".box1", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
// },"+=0.2").to(".box2", { 
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
// }).to(".box3", {
//   x: 1200,
//   duration: 1.3,
//   ease: "power4.inOut",
// })



//labels , labels-=0.2

tl.to(".box", {
  x: 1200,
  duration: 1.3,
  ease: "power4.inOut",
  delay: 0.6
}).to(".box1", {
  x: 1200,
  duration: 1.3,
  ease: "power4.inOut",
}, "adi" ).to(".box2", { 
  x: 1200,
  duration: 1.3,
  ease: "power4.inOut",
}).to(".box3", {
  x: 1200,
  duration: 1.3,
  ease: "power4.inOut",
}, "adi-=0.8")