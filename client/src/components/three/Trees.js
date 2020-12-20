import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";

const Trees = ({destination, active, setActive, ...props}) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  const gltf = useGLTF('/gltf/trees/scene.gltf', true);

  return (
    <Suspense fallback={null}>
      <group position={[0, 1, 0]} scale={[.05, .05, .05]}>
        <primitive ref={ref} object={gltf.scene} dispose={null}>
          <planeBufferGeometry attach="geometry" />
        </primitive>
      </group>
    </Suspense>
  )
}

export default Trees;