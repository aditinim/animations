import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap'
import { motion, scale } from 'motion/react';




const App = () => {

  const containerVariant= {
    hidden: {},
    visible: {}
  }

  const boxVariant = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1
    }
  }

  return (
    <div>
      <motion.div variants={containerVariant} initial="hidden" animate="visible" className="containerDiv">
        {/* <div className="page"></div> */}
        <motion.div
          variants={boxVariant}
          
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          
          // whileHover={{scale:1.5}}
          // whileTap={{scale: 0.8}}
          // whileInView={{opacity:1, scale:0.5}}
          // viewport={{once: false, amount:1}}
          className="box">
        </motion.div>

        <motion.div
          initial={{ x: 0, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          animate={{ x: 500, opacity: 1 }}
          // whileHover={{scale:1.5}}
          // whileTap={{scale: 0.8}}
          // whileInView={{opacity:1, scale:0.5}}
          // viewport={{once: false, amount:1}}
          className="box">
        </motion.div>

        <motion.div
          initial={{ x: 0, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          animate={{ x: 500, opacity: 1 }}
          // whileHover={{scale:1.5}}
          // whileTap={{scale: 0.8}}
          // whileInView={{opacity:1, scale:0.5}}
          // viewport={{once: false, amount:1}}
          className="box">
        </motion.div>
        {/* <div className="page"></div> */}
      </motion.div>



    </div>
  )
}

export default App



//animate me daalnege final property