import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".imageDiv", {
  scale: 0.3
})


gsap.set(".content", {
  gap: "50rem",
})


const tl= gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "top -40%",
    scrub: true , 
    pin: true,  //jab tk animation poora nah ho, page scroll nah ho
  }
});


tl.to(".imageDiv", {
  scale: 1,
  // duration: 1.3,
  ease: "power4.out", 
  
}).to('.content', {
  gap: "2rem"
}, "<")

// scroll trigger- > start , triggering element, end 
/**
 * pattern to write start and end
 * "___ ___"
 * first-> top , bottom, center (triggering element)
 * second-> top, bottom, center, 0%-100% (viewport)
 */