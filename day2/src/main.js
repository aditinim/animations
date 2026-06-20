import './style.css'
import gsap from 'gsap'


const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const seek = document.querySelector(".seek");




const tl = gsap.timeline({paused: true});


tl.to(".box", {
  x: 1200,
  duration: 1,
  ease: "power4.inOut",
  delay: 0.6
})
.to(".box1", {
  x: 1200,
  duration: 1,
  ease: "power4.inOut",
}, )
.to(".box2", { 
  x: 1200,
  duration: 1,
  ease: "power4.inOut",
}).addLabel('adi')
.to(".box3", {
  x: 1200,
  duration: 1,
  ease: "power4.inOut",
},)



play.addEventListener("click", ()=>{
  tl.play();
})

pause.addEventListener("click", ()=>{
  tl.pause();
})


restart.addEventListener("click", ()=>{
  tl.restart();
})

reverse.addEventListener("click", ()=>{
  tl.reverse();
})

seek.addEventListener("click", ()=>{
  tl.seek("adi");
})