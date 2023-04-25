import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import React from 'react';
import Shirt from './Shirt.canvas';
import Backdrop from './Backdrop.canvas';
import CameraRig from './CameraRig.canvas';



const CanvasIndex = () => {
    return (
        <React.Fragment>
            <Canvas
                shadows
                camera={{ position: [0, 0, 0], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
                className={`w-full max-w-full h-full transition-all ease-in`}
            >
                <ambientLight intensity={0.5} />
                <Environment preset='city' />

                <CameraRig>
                    <Backdrop />
                    <Center>
                        <Shirt />
                    </Center>
                </CameraRig>
            </Canvas>
        </React.Fragment >
    )
}

export default CanvasIndex