import React from 'react';
import { usePlane } from "@react-three/cannon";

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial color='green' />
    </mesh>
  );
}
 
export default Plane;