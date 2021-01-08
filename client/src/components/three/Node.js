import React, { Suspense } from 'react';
import { useBox } from "@react-three/cannon";
const Node = ({destination, active, setActive, ...props}) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));

  return ( 
    <Suspense fallback={null}>
        <mesh 
        scale={[.35, .35, .35]}
        ref={ref}
        onClick={() => setActive(destination.id)}
        // onPointerOver={() => setHovered(true)}
        // onPointerOut={() => setHovered(false)}
        >
          <icosahedronGeometry attach="geometry"/>
          <meshStandardMaterial color="orange"/>
        </mesh>
    </Suspense>
  );
}
 
export default Node;