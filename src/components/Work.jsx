import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import data from "./data";
import './work.css';
import ComputersCanvas from './Laptop';
import { motion } from 'framer-motion';



const Work = () => {
    const [openAccordion, setOpenAccordion] = useState(0); // Initialize with the index of the first Accordion

    const handleAccordionClick = (index) => {
        setOpenAccordion(index === openAccordion ? -1 : index); // Toggle the Accordion open/close
    };




    return (
        <div className="work-container">
            <h1>Professional Experience</h1>
            <div className='accordion-row'>
                <div className='accordion'>
               
                        {data.map((item, index) => (
                         <motion.div
                         key={index}
                         initial={{ y: 100, opacity: 0 }}
                         whileInView={{ y: 1, opacity: 1 }}
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: index === 0 ? .01 : index - .05 }}
                         >
                         <Accordion
                             expanded={index === openAccordion}
                             onChange={() => handleAccordionClick(index)}
                         >
                             <AccordionSummary
                                 expandIcon={<FontAwesomeIcon icon={index === openAccordion ? faMinus : faPlus} />}
                                 aria-controls={`panel${index + 1}-content`}
                                 id={`panel${index + 1}-header`}
                             >
                                 <Typography className='title-date'>
                                     <span className='title-company'>{item.title}</span>
                                     <span className='title-title'>{item.cardTitle}</span>
                                 </Typography>
                             </AccordionSummary>
                             <AccordionDetails>
                                 <Typography>{item.cardSubtitle}</Typography>
                                 <Typography>{item.cardDetailedText}</Typography>
                             </AccordionDetails>
                         </Accordion>
                     </motion.div>

                        ))}

                </div>
                <div className='computer-container'>
                    <motion.div
                               initial={{ x: 100, opacity: 0 }}
                               whileInView={{ x: 1, opacity: 1 }}
                               viewport={{ once: true, amount: 0.5 }}
                               transition={{ delay: 1}}

                    >
                    <ComputersCanvas />

                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Work;
