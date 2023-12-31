/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import './work.css';


const Planet = () => {
  const planet = useGLTF("./planet/scene.gltf");
  const isMobileView = window.innerWidth < 768;


  return (
    <>
          <mesh>
                <primitive
                    object={planet.scene}
                    scale={isMobileView ? 2 : 2}
                />
            </mesh>
    </>
  );
};

const PlanetCanvas = () => {
  const sectionRef = useRef(null);
  const [rotateSpeed, setRotateSpeed] = useState(1.5);


  // Function to handle intersection changes
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setRotateSpeed(1.5)
        console.log("here")

        // setTimeout(() => {
        //     setRotateSpeed(1.5)
        // }, 200);
      }
    });
  };

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="canvas-container" >
      <Canvas>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={rotateSpeed}
        />
        <directionalLight intensity={10} />
        <pointLight intensity={50} />
        <Planet />
        <Preload all />
      </Canvas>
      <div ref={sectionRef}></div>
    </div>
  );
};

export default PlanetCanvas;
