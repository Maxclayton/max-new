import './Projects.css';
import FindMyLights from './proj-images/fml.png';
import ClozdPic from './proj-images/clozd.png';
import TimeTrack from './proj-images/time-track.png';
import Stonk from './proj-images/stonk.png'
import { motion } from 'framer-motion';

const Projects = () => {
  const projectData = [
    {
      title: 'Clozd.com',
      description:
        'The Clozd site was built out entirely by me.  It has 50+ pages and continues to grow.  To build it I used HTML, CSS, Javascript, jQuery and Webflow.',
      projImg: ClozdPic,
      link: 'https://www.clozd.com/',
      color: '#5D349B',
      delay: .25
    },
    {
      title: 'TimeTrack',
      description:
        'TimeTrack was built to track times of users, keep a list of the users with their time, and organize it by the fastest time.  The tricky part here is the text input.  I made it so a use could put in 30, and it would know it meant half of a minute.  The user could also input 1:21, and the logic would know how to compare the two times.',
      projImg: TimeTrack,
      link: 'https://trackthat.netlify.app/',
      color: '#F08500',
      delay: .5


    },
    {
      title: 'Stonk',
      description:
        'For Stonky, I used the Yahoo Finance API to loop over the last 100 days of data from my selected ticker. I then plot that data to a graph, using Plotly.js. The user can zoom in on the graph, take snapshots, or hover over certain days to see what the price was for that day. The price information is also displayed below the graph.',
      projImg: Stonk,
      color: '#387045',
      link: 'https://stonky.netlify.app/',
      delay: 1
    },
    // Add more project data as needed
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-wrapper">
        <div className="projects-left">
          <motion.div
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: 0}}
            viewport={{ once: true }}

          >

          <div className='project proj-large'>
            <img src={FindMyLights} />
            <motion.div
              className="title-drawer"
              initial={{ height: 50 }}
              whileHover={{ height: 618.13 }}
              transition={{ duration: .25 }}
            >
              <h2>Find My Lights</h2>
              <div
                className="hidden-text"
              >
                <p>Find My Lights is built in React. I used the <a href="https://visgl.github.io/react-map-gl/">React-Map-GL</a> library to map a bunch of data points out that the user can visit. Each light bulb represents a house with a Christmas Light show. When the user clicks the Map My Location button, their location is mapped and marked by a blue circle. They are then able to navigate to a Christmas Light near them. When clicked, the Christmas Lights open up a box with information on that specific light. There is also settings that allow the user to adjust the map theme as well as toggle the snowfall on and off.</p>
                <a href="https://findmylights.netlify.app/">See it in action</a>
              </div>
            </motion.div>
          </div>
          </motion.div>

        </div>
        <div className="projects-right">  {projectData.map((project, index) => (
          <motion.div
          key={index}
          initial={{opacity: 0, x: 20}}
          whileInView={{opacity: 1, x: 0}}
          transition={{delay: project.delay}}
          viewport={{ once: true }}

          >

   
            <div key={index} className='project proj-small'>
              <img src={project.projImg} />
              <motion.div
                className="title-drawer"
                initial={{ height: 50 }}
                whileHover={{ height: 304.50 }}
                style={{ backgroundColor: project.color }}
              >
                <h2>{project.title}</h2>
                <div
                  className="hidden-text"
                >
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer">See it in action</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}</div>
      </div>
    </div>
  );
};

export default Projects;
