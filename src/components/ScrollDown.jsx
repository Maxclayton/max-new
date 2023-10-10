/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 public/models/ufoLightrot4.glb 
*/

import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import './ScrollDown.css'


const ScrollDown = () => {

  return (
    <div className='scroll'>
      <div className='scroll-container'>
      <a href="#about">
      <motion.div
        initial={{ y: 0, scale: 1 }}
        animate={{ y: [0, 30, 0], scale: 1}}
        transition={{
          repeat: Infinity,
          duration: 3.5
        }}
      >
        <div className='circle'></div>
        </motion.div>
      </a>
   

      </div>
  
    </div>
  )
}

export default ScrollDown

