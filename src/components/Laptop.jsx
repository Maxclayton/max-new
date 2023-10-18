/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Computers = () => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        <>
            <mesh>
                <primitive
                    object={computer.scene}
                    scale={12}
                    rotation={[.5, -.7, .2]}

                />
            </mesh>

        </>
    );
};

const ComputersCanvas = () => {

    return (

        <Canvas>
            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                autoRotate={true}
                autoRotateSpeed={.5}
            />
            <directionalLight intensity={10} />
            <pointLight intensity={50} />
            <Computers />
            <Preload all />
        </Canvas>

    );
};

export default ComputersCanvas;