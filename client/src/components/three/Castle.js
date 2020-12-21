import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";

const Castle = ({...props}) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  const castleGltf = useGLTF('/gltf/castle/scene.gltf', true);

  return (
    <Suspense fallback={null}>
      <group position={[7.5, 0, 2]} scale={[.2, .2, .2]}>
        <primitive ref={ref} object={castleGltf.scene} dispose={null}>
          <planeBufferGeometry attach="geometry" />
        </primitive>
      </group>
    </Suspense>
  )
}

export default Castle;