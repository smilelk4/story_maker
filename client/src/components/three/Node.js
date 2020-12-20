import React, { Suspense, useState } from 'react';
import { useBox } from "@react-three/cannon";
import { useTexture } from '@react-three/drei';

const Node = ({destination, active, setActive, ...props}) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  const [hovered, setHovered] = useState(false);  
  const texture = useTexture('https://story-maker-app.s3.amazonaws.com/hero-icons/17.png');

  return ( 
    <Suspense fallback={null}>
      <mesh 
        ref={ref}
        onClick={() => setActive(destination.id)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        >
        <circleBufferGeometry rotation={[-Math.PI / 2, 0, 0]} />
        {/* <icosahedronBufferGeometry attach="geometry" color="pink"/> */}
        <meshStandardMaterial 
          map={texture}
          color={hovered ? 'pink' : 'orange'} />
      </mesh>
    </Suspense>
  );
}
 
export default Node;