/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import './work.css';


const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <>
          <mesh>
                <primitive
                    object={computer.scene}
                    scale={12}
                    rotation={[.5, -.7, .2]}
                    position={[0, -1, 0]}
                />
            </mesh>
    </>
  );
};

const ComputersCanvas = () => {
  const sectionRef = useRef(null);
  const [rotateSpeed, setRotateSpeed] = useState(200);


  // Function to handle intersection changes
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
            setRotateSpeed(1.5)
            console.log("here")
        }, 500);
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
    <div className="canvas-container" ref={sectionRef}>
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
        <Computers />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
