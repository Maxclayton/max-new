/* eslint-disable react/no-unknown-property */
import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import './hero.css'



function MyCanvas() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  function Box(props) {
    const mesh = useRef();
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001));
    return (
      <mesh {...props} ref={mesh}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
    );
  }

  function Sphere(props) {
    const mesh = useRef();
    return (
      <mesh {...props} ref={mesh}>
        <sphereGeometry />
        <meshStandardMaterial color={"#5E00F0"} />
        <pointLight
          color="#5E00F0"
          intensity={100}
          distance={10}
          decay={2}
          position={[0, 0, 0]}
        />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={5} />
        </EffectComposer>
      </mesh>
    );
  }

  function Pyramid(props) {
    const mesh = useRef();
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
      <mesh {...props} ref={mesh}>
        <torusGeometry />
        <meshStandardMaterial color={"black"} />

        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={5} />
        </EffectComposer>
      </mesh>
    );
  }

  return (
    <div className='canvas-container2'>

      {screenWidth > 900 ? (

        <Canvas>
          <ambientLight />
          <directionalLight intensity={15} />
          <pointLight intensity={50} />
          <Sphere position={[2, 1.5, 1]} scale={.20} rotation={[.8, .82, .45]} />
          <Box position={[-5, 1, -2]} scale={.75} rotation={[.8, .82, .45]} />
          <Box rotation={[2.7, 1, 2.7]} />
          <Box position={[4, -3, -2]} scale={.80} />
          <Pyramid position={[-4, -3, -2]} scale={.75} />
        </Canvas>
      ) : (



        <Canvas>
          <ambientLight />
          <directionalLight intensity={15} />
          <pointLight intensity={50} />
          <Sphere position={[1, 1.5, 1]} scale={.20} rotation={[.8, .82, .45]} />
          <Box position={[-2, 2, -2]} scale={.50} rotation={[.8, .82, .45]} />
          <Box rotation={[2.7, 1, 2.7]} scale={.75} />
          <Box position={[2, -3, -2]} scale={.4} />
          <Pyramid position={[-2, -3, -2]} scale={.5} />

        </Canvas>
      )}
    </div>


  )
}

export default MyCanvas;
