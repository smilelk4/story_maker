import React, { useRef, useEffect, Suspense, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { Stars, OrbitControls } from 'drei';
import { useGLTF } from '@react-three/drei';
import NavBar from './NavBar';

import HubHeader from './hub/HubHeader';
import ProgressContainer from './story/ProgressContainer';

const Tavern = () => {
  const gltf = useGLTF('/scene.gltf', true);

  return (
    <group position={[0, -10, 0]} scale={[.1, .1, .1]}>
      <primitive object={gltf.scene} dispose={null}></primitive>
    </group>
  )
}
  
const HeaderContainer = () => {
  const container = useRef();
  const { pathname } = useLocation();
  const [ currentGraphic, setCurrentGraphic ] = useState('myhub');

  useEffect(() => {
    if (pathname === '/my-hub') {
      setCurrentGraphic('myhub');
    } else {
      setCurrentGraphic('story');
    }
  }, [pathname, setCurrentGraphic]);

  return ( 
    <div ref={container} className="header__container">
      {currentGraphic === 'myhub' ? (
        <HubHeader />
      ) : <ProgressContainer />}
      <NavBar />
    </div>
  );
}
 
export default HeaderContainer;