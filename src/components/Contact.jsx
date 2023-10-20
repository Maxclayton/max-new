/* eslint-disable react/no-unescaped-entities */
import './contact.css';
import PlanetCanvas from './Planet';
import { motion } from 'framer-motion';

// import { motion } from 'framer-motion';

const Contact = () => {


  return (
    <div className="contact-container">
      <div className='contact-wrap'>
        <div className='contact-left'>
          <motion.div
          whileInView={{ width: 224, transition: { duration: .25, delay: 1.25 } }}
          initial={{ width: 0 }}
          className='contact-bg'
          viewport={{ once: true }}

          >
                      </motion.div>

            <h1>Contact</h1>
           <p>I am always interested to learn about new projects.  Send me an email, or reach out on LinkedIn.<br></br> Let's get developing! </p>
           <div className='pipes'>
           <p>maxclayton07@gmail.com</p>
            <a href='https://www.linkedin.com/in/max-clayton-528b88194/' target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
           </div>

        </div>
        <div className='contact-right'>
          <motion.div
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{delay: 2, duration: 1}}
          viewport={{ once: true }}

          >
          <PlanetCanvas />

          </motion.div>
        </div>
        </div>
    </div>
  );
};

export default Contact;
