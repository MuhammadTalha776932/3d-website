import { GroupProps, useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import React from 'react'
import state from '../store/index.store'
import { Group } from 'three'
interface ICameraRigProps {
    children: React.ReactNode
}

const CameraRig = ({ children }: ICameraRigProps) => {

    const groups = React.useRef<GroupProps | undefined>();
    const snap = useSnapshot(state);

    useFrame((state, delta) => {
        const isBreakpoint: boolean = window.innerWidth <= 1260;
        const isMobile: boolean = window.innerWidth <= 600;

        // * set the initial position of the model
        let targetPosition: [x: number, y: number, z: number] = [-0.4, 0, 4]; // ? position:[x:number,y:number,z:number]

        if (snap.intro) {
            if (isBreakpoint) targetPosition = [0, 0, 2];
            if (isMobile) targetPosition = [0, 0.2, 2.5];
        } else {
            if (isMobile) targetPosition = [0, 0, 2.5]
            else targetPosition = [0, 0, 2];
        }

        // * set model camera position
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)
        // * set the model rotation smoothly
        easing.dampE(
            groups.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta,
        )
    })

    return (
        <group ref={groups}>
            {
                children
            }
        </group>
    )
}

export default CameraRig