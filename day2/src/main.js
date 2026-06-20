import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(SplitText, ScrollTrigger, Draggable,InertiaPlugin, Flip);


// FLIP - first - last- invert- play


const img= document.querySelector(".specialImage");
const img2= document.querySelector(".specialImage2");



img.addEventListener('click', ()=>{
  const state= Flip.getState(img);
  const state2= Flip.getState(img2);

  document.querySelector(".imageGallery").appendChild(img2);
  document.querySelector(".imageShow").appendChild(img);

  Flip.from(state , {
    duration: 0.8,
    ease: "power3.inOut",
    absolute: true,
    scale: true 
  });

  Flip.from(state2 , {
    duration: 0.8,
    ease: "power3.inOut",
    absolute: true,
    scale: true 
  })


})