import { useGSAP } from '@gsap/react';
import React , {useRef} from 'react'
import gsap from 'gsap'
import AnimateOnX from './components/AnimateOnX';

// gsap.registerPlugin(useGSAP);

const App = () => {

  const boxRef= useRef(null);
  const containerRef= useRef(null);

  // const {contextSafe}= useGSAP(()=>{
  //   gsap.to(boxRef.current, {
  //     x: 700,
  //     duration: 0.8,
  //     delay: 0.6
  //   })
  // }, {scope: containerRef.current, dependencies: [], revertOnUpdate: true})
  
  useGSAP(()=>{
    gsap.to(boxRef.current, {
      x: 700,
      duration: 1,
      delay: 0.5
    })
  }, {scope: containerRef.current, dependencies: [], revertOnUpdate: true})
  

  // return (
  //   <div ref={containerRef }>
  //     <div ref={boxRef} className="box"></div>
  //     <button onClick={(contextSafe(()=>{
  //       // gsap.to()
  //     }))}></button>
  //   </div>
  // )

  return (
    <div ref={containerRef }>
      <div ref={boxRef} className="box"></div>

      <AnimateOnX>
        <div className="box"></div>
      </AnimateOnX>

      <AnimateOnX>
        <div className="box1"></div>
      </AnimateOnX>

      <AnimateOnX>
        <div className="box2"></div>
      </AnimateOnX>
    </div>
  )
}

export default App