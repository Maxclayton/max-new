/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import { useVideoTexture, useTexture } from '@react-three/drei';
import Code from '../components/proj-images/codeTest.mp4';
import Stonk from '../components/proj-images/stonk.png';

const LaptopType = (props) => {
  const { nodes, materials } = useGLTF('../models/laptopType.glb');

  function VideoMaterial({ url }) {
    const texture = useVideoTexture(url);
    return <meshBasicMaterial map={texture} toneMapped={false} />;
  }
  
  function FallbackMaterial({ url }) {
    const texture = useTexture(url);
    return <meshBasicMaterial map={texture} toneMapped={false} />;
  }
  

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Display.geometry} material={materials.Display} position={[0, 0.01, -0.105]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh  geometry={nodes.Screen_Animation.geometry} material={materials.Screen}  flipX={false} position={[0, 0.01, -0.105]} rotation={[-Math.PI / 2, 0, 0]} >
      <Suspense   fallback={<FallbackMaterial url={Stonk} />}>
        <VideoMaterial   url={Code}  />
      </Suspense>
      </mesh>
      <mesh geometry={nodes.Cube.geometry} material={materials.Body} />
      <mesh geometry={nodes.Cube_1.geometry} material={materials.Keys} />
    </group>
  );
};

export default LaptopType;

useGLTF.preload('../models/laptopType.glb');

