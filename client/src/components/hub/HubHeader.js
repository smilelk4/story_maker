import React, { Suspense } from 'react';

import { useLocation } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { Stars, OrbitControls } from 'drei';
import { useGLTF, Loader } from '@react-three/drei';
import Tavern from '../three/Tavern';

// const Tavern = () => {
//   const gltf = useGLTF('/scene.gltf', true);

//   return (
//     <group position={[0, -10, 0]} scale={[.1, .1, .1]}>
//       <primitive object={gltf.scene} dispose={null}></primitive>
//     </group>
//   )
// }

const HubHeader = () => {
  return ( 
    <header className='header'>
      <Canvas>
        <Stars 
          radius={200}
          depth={500}
          count={3000} />
      <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Tavern />
        </Suspense>
      </Canvas>
      <Loader />
    </header>
  );
}
 
export default HubHeader;