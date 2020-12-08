import React from 'react';
import { usePlane } from "@react-three/cannon";
import { useTexture } from '@react-three/drei';

const Plane = (props) => {
  const texture = useTexture('https://story-maker-app.s3.amazonaws.com/deep-green-grass-texture.jpg')

  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial map={texture} color='green' />
    </mesh>
  );
}
 
export default Plane;