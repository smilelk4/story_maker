import React, { Suspense, useState } from 'react';
import { useBox } from "@react-three/cannon";
import { useGLTF, useTexture } from '@react-three/drei';
import Trees from './Trees';

const Node = ({destination, active, setActive, ...props}) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  const [hovered, setHovered] = useState(false);  
  const gltf = useGLTF('/gltf/trees/scene.gltf', true);
  // const texture = useTexture('https://story-maker-app.s3.amazonaws.com/tree-2.png')
  // const texture = useTexture(destination.parent_destination_id ? 'https://story-maker-app.s3.amazonaws.com/tree-2.png' : 'https://story-maker-app.s3.amazonaws.com/castle.png')

  return ( 
    <Suspense fallback={null}>
      {/* {destination.parent_destination_id ? ( */}
        <mesh 
        scale={[.35, .35, .35]}
        ref={ref}
        onClick={() => setActive(destination.id)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        >
          <icosahedronGeometry attach="geometry"/>
          <meshStandardMaterial color="orange"/>
        </mesh>
      {/* ) : (
        <group scale={[.05, .05, .05]}>
        <primitive ref={ref} object={gltf.scene} dispose={null}>
          <planeBufferGeometry attach="geometry" />
        </primitive>
      </group>
      )} */}
    </Suspense>
  );
}
 
export default Node;