import React, { Suspense } from 'react';
import { useBox } from "@react-three/cannon";
import { useTexture } from '@react-three/drei';

const Hero = ({hero, active, setActive, ...props}) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  const texture = useTexture(hero ? hero.image : '')

  return ( 
    <Suspense fallback={null}>
      <mesh 
        ref={ref}
        >
        <planeBufferGeometry attach="geometry"/>
        <meshStandardMaterial map={texture} />
      </mesh>
    </Suspense>
  );
}
 
export default Hero;