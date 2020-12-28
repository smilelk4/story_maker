import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import path from 'path';

const Tavern = () => {
  const gltf = useGLTF(path.resolve(__dirname, '/gltf/tavern/scene.gltf'), true);

  return (
    <group position={[0, -10, 0]} scale={[.1, .1, .1]}>
      <primitive object={gltf.scene} dispose={null}></primitive>
    </group>
  )
}

export default Tavern;