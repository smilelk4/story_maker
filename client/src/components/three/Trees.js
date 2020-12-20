import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

const Trees = () => {
  const gltf = useGLTF('/gltf/trees/scene.gltf', true);

  return (
    <group position={[0, 0, 0]} scale={[.1, .1, .1]}>
      <primitive object={gltf.scene} dispose={null}></primitive>
    </group>
  )
}

export default Trees;