import React, { Suspense } from 'react';

import { Canvas } from 'react-three-fiber';
import { Stars, OrbitControls } from 'drei';
import { Loader } from '@react-three/drei';
import Tavern from '../three/Tavern';

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