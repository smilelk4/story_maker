import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";
import path from 'path';

const Castle = ({...props}) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  const castleGltf = useGLTF(path.resolve(__dirname, '/gltf/castle/scene.gltf'), true);

  return (
    <Suspense fallback={null}>
      <group position={[5.5, 0, 3]} scale={[.4, .4, .4]}>
        <primitive ref={ref} object={castleGltf.scene} dispose={null}>
          <planeBufferGeometry attach="geometry" />
        </primitive>
      </group>
    </Suspense>
  )
}

export default Castle;