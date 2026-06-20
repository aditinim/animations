import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

const split= new SplitText(".title h1", {
  type: "chars, words, lines",
  wordsClass: 'titleWord',
  charsClass: "titleChars"
});

gsap.from(split.chars, {
  yPercent: -50,
  opacity:0,
  duration: 1,
  ease: "expo.out",
  stagger: {
    each: 0.2,
    from: "start"
  }
})