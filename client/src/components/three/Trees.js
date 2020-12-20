import React, { Suspense, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";

const Trees = ({destination, active, setActive, ...props}) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  const gltf = useGLTF('/gltf/trees/scene.gltf', true);
  const [hovered, setHovered] = useState(false);  

  debugger


  return (
    <Suspense fallback={null}>
      <group {...props} scale={[.05, .05, .05]}>
        <primitive ref={ref} object={gltf.scene} dispose={null}>
        </primitive>
        {/* <planeBufferGeometry attach="geometry" /> */}
        <icosahedronBufferGeometry attach="geometry" color="pink"/>
      </group>
    </Suspense>

  //   <Suspense fallback={null}>
  //   <mesh 
  //     ref={ref}
  //     onClick={() => setActive(destination.id)}
  //     onPointerOver={() => setHovered(true)}
  //     onPointerOut={() => setHovered(false)}
  //     >
  //     <group position={[0, 1, 0]} scale={[.05, .05, .05]}>
  //       <primitive ref={ref} object={gltf.scene} dispose={null}>
  //       </primitive> 
  //     </group>
  //     {/* <icosahedronBufferGeometry attach="geometry" color="pink"/> */}
  //     {/* <planeBufferGeometry attach="geometry" /> */}
  //     {/* <meshStandardMaterial color={hovered ? 'pink' : 'orange'} /> */}
  //   </mesh>
  // </Suspense>
  )
}

export default Trees;