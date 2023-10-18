import  { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faCode, faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const squareVariants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 }
};

const squareVariants2 = {
  visible: { opacity: 1, transition: { duration: 1, delay: .5 } },
  hidden: { opacity: 0 }
};

const squareVariants3 = {
  visible: { opacity: 1, transition: { duration: 1, delay: .7 } },
  hidden: { opacity: 0 }
};

const colorStreak = {
  visible: { width: 224, transition: { duration: .25, delay: 1 } },
  hidden: { width: 0 }
};
const colorStreak2 = {
  visible: { width: 224, transition: { duration: .25, delay: 1.25 } },
  hidden: { width: 0 }
};
const colorStreak3 = {
  visible: { width: 105, transition: { duration: .25, delay: 1.5 } },
  hidden: { width: 0 }
};


const About = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const isMobileView = window.innerWidth < 768;


  return (
    <div id="about" className='main-container-about'>
      <h1>Who I am </h1>
      <div className='about-card-container'>
        <motion.div
          ref={ref}
          animate={controls}
          initial={isMobileView ? "visible" : "hidden"} // Conditionally set the initial state
          variants={squareVariants}
          className="square"
        >
          <div className='about-card'>
            <div className='about-card-top'>
              <FontAwesomeIcon className='font-a-icons' icon={faCode} />
              <div className='about-title'>
                <h2>Software Developer</h2>
                <motion.div
                  className='about-bg'
                  animate={controls}
                  initial="hidden"
                  variants={colorStreak}
                ></motion.div>        
              </div>

            </div>
            <div className='about-card-bottom'>
            <div className='code-blocks'>
                <div className='h3'></div>
                <div className='line'></div>
                <div className='ch3'></div>
              </div>
              <p>Having four years experience in development, I have used Javascript, React, Vue, Svelte and more.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial={isMobileView ? "visible" : "hidden"} // Conditionally set the initial state
          variants={squareVariants2}
          className="square"
        >
          <div className='about-card'>
            <div className='about-card-top'>
              <FontAwesomeIcon className='font-a-icons' icon={faLaptop} />
              <div className='about-title'>
              <h2>Front End Obsessed</h2>
              <motion.div
                  className='about-bg2'
                  animate={controls}
                  initial="hidden"
                  variants={colorStreak2}
                ></motion.div>   
                </div> 
            </div>
            <div className='about-card-bottom'>
              <div className='code-blocks'>
                <div className='h3'></div>
                <div className='line'></div>
                <div className='ch3'></div>
              </div>

              <p>Exploring various libraries and frameworks, I am always learning something new about front end development.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial={isMobileView ? "visible" : "hidden"} // Conditionally set the initial state
          variants={squareVariants3}
          className="square"
        >
          <div className='about-card'>
            <div className='about-card-top'>
              <FontAwesomeIcon className='font-a-icons' icon={faPaperPlane} />
              <div className='about-title'>
              <h2>Growing</h2>
              <motion.div
                  className='about-bg3'
                  animate={controls}
                  initial="hidden"
                  variants={colorStreak3}
                  delay={10}
                ></motion.div>   
                </div> 
            </div>
            <div className='about-card-bottom'>
            <div className='code-blocks'>
                <div className='h3'></div>
                <div className='line'></div>
                <div className='ch3'></div>
              </div>
              <p>I am always trying to sharpen my skills and learn new things, whether that is a new framework, library, or modern methodology.</p>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default About