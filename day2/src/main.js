import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(SplitText, ScrollTrigger, Draggable);

// const split= new SplitText(".title h1", {
//   type: "chars, words, lines",
//   wordsClass: 'titleWord',
//   charsClass: "titleChars"
// });

// gsap.from(split.chars, {
//   yPercent: -50,
//   opacity:0,
//   duration: 1,
//   ease: "expo.out",
//   stagger: {
//     each: 0.2,
//     from: "start"
//   }
// })


Draggable.create(".box", {
  bounds: "#app",
  // type: "x",
  // type: "y",
  type: "x, y",
  edgeResistance: 0.5,
});