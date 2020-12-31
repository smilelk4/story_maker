import React, { useRef, useEffect, Suspense, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { Stars, OrbitControls } from 'drei';
import { useGLTF } from '@react-three/drei';
import NavBarContainer from './NavBarContainer';
// import { clearDestinationsAction } from '../store/reducers/destinationReducer';

import HubHeader from './hub/HubHeader';
import ProgressHeader from './story/ProgressHeader';
  
const HeaderContainer = () => {
  const container = useRef();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [ currentGraphic, setCurrentGraphic ] = useState('myhub');

  useEffect(() => {
    if (pathname === '/my-hub') {
      setCurrentGraphic('myhub');
    } else {
      setCurrentGraphic('story');
    }
  }, [pathname, setCurrentGraphic]);

  // useEffect(() => {
  //   dispatch(clearDestinationsAction());
  // }, [currentGraphic, dispatch])

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