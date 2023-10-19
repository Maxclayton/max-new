import './Projects.css';
import FindMyLights from './proj-images/fml.png';
import ClozdPic from './proj-images/clozd.png';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectData = [
    {
      title: 'Clozd.com',
      description:
        'clozd desc',
      projImg: ClozdPic,
    },
    {
        title: 'Find My Lights',
        description:
          'Find My Lights is built in React. I used the React-Map-GL library to map a bunch of data points out that the user can visit. Each light bulb represents a house with a Christmas Light show. When the user clicks the Map My Location button, their location is mapped and marked by a blue circle. They are then able to navigate to a Christmas Light near them. When clicked, the Christmas Lights open up a box with information on that specific light. There is also settings that allow the user to adjust the map theme as well as toggle the snowfall on and off.',
          projImg: ClozdPic,

        },
        {
            title: 'Find My Lightsss',
            description:
              'Find My Lights is built in React. I used the React-Map-GL library to map a bunch of data points out that the user can visit. Each light bulb represents a house with a Christmas Light show. When the user clicks the Map My Location button, their location is mapped and marked by a blue circle. They are then able to navigate to a Christmas Light near them. When clicked, the Christmas Lights open up a box with information on that specific light. There is also settings that allow the user to adjust the map theme as well as toggle the snowfall on and off.',
              projImg: ClozdPic,
    
            },
    // Add more project data as needed
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-wrapper">
        <div className="projects-left">
            <div className='project proj-large'>
              <img src={FindMyLights} />
              <motion.div
                className="title-drawer"
                initial={{ height: 50 }}
                whileHover={{ height: 429 }}
                transition={{duration: .25}}
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

        </div>
        <div className="projects-right">  {projectData.map((project, index) => (
            <div key={index} className='project proj-small'>
              <img src={project.projImg} />
              <motion.div
                className="title-drawer"
                initial={{ height: 50 }}
                whileHover={{ height: 264 }}
              >
                <h2>{project.title}</h2>
                <div
                  className="hidden-text"
                >
                  <p>{project.description}</p>
                </div>
              </motion.div>
            </div>
          ))}</div>
      </div>
    </div>
  );
};

export default Projects;
