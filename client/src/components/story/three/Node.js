import React, { Suspense, useState } from 'react';
import { useBox } from "@react-three/cannon";

const Node = ({destination, active, setActive, ...props}) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  const [hovered, setHovered] = useState(false);  

  return ( 
    <Suspense fallback={null}>
      <mesh 
        ref={ref}
        onClick={() => setActive(destination.id)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        >
        <icosahedronBufferGeometry attach="geometry" color="pink"/>
        <meshStandardMaterial color={hovered ? 'pink' : 'orange'} />
      </mesh>
    </Suspense>
  );
}
 
export default Node;