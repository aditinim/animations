import './style.css'
import gsap from 'gsap'


/**
 * methods
 * .to
 * .from
 * .fromto 
 * .set
 */

// const box= document.querySelector(".box");
// gsap.to(box, {

// })


// aise bhi kar skte hai 

// gsap.to('.box', {

// } )


// gsap.to(['.box', '.box2']) for multiple selection



// gsap.to('.box', {
//   // properties 
//   delay: 0.6,
//   x: 100,
//   duration: 1,
// })


// we do not need to write px, gsap automatically takes it as in px (pixels) by default

/**
 * default units
 * length px
 * time s
 */


// gsap.from('.box', {
//   delay: 0.6,
//   x: 100,
//   duration: 1,
// })


gsap.fromTo(
  '.box',
  {
    x: 0,
  },
  {
    delay: 0.6,
    duration: 1,
    x: 400,
    y: 200
  })


//custom properties

const obj = {
  a: 0,
}

gsap.to(obj, {
  a:100
})