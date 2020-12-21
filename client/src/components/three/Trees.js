import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";

const Trees = ({...props}) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  const gltf = useGLTF('/gltf/trees/scene.gltf', true);

  return (
    <Suspense fallback={null}>
      <group position={[-8, .4, 0]} scale={[.1, .1, .1]}>
        <primitive ref={ref} object={gltf.scene} dispose={null}>
          <planeBufferGeometry attach="geometry" />
        </primitive>
      </group>
    </Suspense>
  )
}

export default Trees;