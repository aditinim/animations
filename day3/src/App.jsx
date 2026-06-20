import { useGSAP } from '@gsap/react';
import React , {useRef} from 'react'
import gsap from 'gsap'
import AnimateOnX from './components/AnimateOnX';


const App = () => {

  const boxRef= useRef([]);
  const containerRef= useRef(null);


  useGSAP(()=>{
    gsap.to(boxRef.current, {
      x: 700,
      duration: 1,
      delay: 0.5,
      stagger: 0.2
    })
  }, {scope: containerRef.current, dependencies: [], revertOnUpdate: true})

  return (
    <div ref={containerRef }>
      <div ref={(el)=> boxRef.current.push(el)} className="box"></div>
      <div ref={(el)=> boxRef.current.push(el)} className="box"></div>
      <div ref={(el)=> boxRef.current.push(el)} className="box"></div>

    </div>
  )
}

export default App