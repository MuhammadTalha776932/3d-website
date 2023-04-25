import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import React from 'react'
import state from '../store/index.store'
import * as THREE from 'three'

interface ICameraRigProps {
    children: React.ReactNode
}
interface GroupProps {
    ref?: React.Ref<THREE.Group> | undefined;
}

const CameraRig = ({ children }: ICameraRigProps) => {

    const groups = React.useRef<GroupProps>();
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
        const { current } = groups;
        const { rotation } = current as THREE.Group
        easing.dampE(
            rotation || new THREE.Euler(), // use optional chaining to access rotation
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta,
        )
        // easing.dampE(
        //     groups.current.rotation,
        //     [state.pointer.y / 10, -state.pointer.x / 5, 0],
        //     0.25,
        //     delta,
        // )
    })

    return (
        <group ref={groups as React.Ref<THREE.Group>}>
            {
                children
            }
        </group>
    )
}

export default CameraRig