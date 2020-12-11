import React, { useRef, useEffect, Suspense, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { Stars, OrbitControls } from 'drei';
import { useGLTF } from '@react-three/drei';
import NavBarContainer from './NavBarContainer';

import HubHeader from './hub/HubHeader';
import ProgressHeader from './story/ProgressHeader';

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
      ) : <ProgressHeader />}
      <NavBarContainer />
    </div>
  );
}
 
export default HeaderContainer;