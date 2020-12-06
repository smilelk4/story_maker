import React, { useEffect, Suspense, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Physics } from "@react-three/cannon";
import { useSpring, config } from '@react-spring/core';
import { useGesture } from 'react-use-gesture';
import { a } from '@react-spring/three';
import clamp from "lodash/clamp";
import{ Html, useGLTFLoader } from 'drei';

import Plane from './three/Plane';
import Node from './three/Node';
import Camera from './three/Camera';

import { getHero } from '../../store/actions/heroAction';

const ProgressContainer = () => {
  const dispatch = useDispatch();
  const heroId = useSelector(state => state.story[0] ? 
                  state.story[0].hero_id : null);
  const destinations = useSelector(state => state.destination);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(null);
  let x = -8;

  useEffect(() => {
    dispatch(getHero(heroId));
  }, [heroId, dispatch]);

  return ( 
    <div className="progress__container">
      <Canvas
        colorManagement>
        <Camera position={[0, 0, 20]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics
          gravity={[0, -10, 0]} >
          {destinations.map(destination => {
            x += 3;
            return <Node
                      destination={destination} 
                      active={active}
                      setActive={setActive}
                      position={[x, 0, 0]} />
          })}
          <Plane />
        </Physics>
        {/* {active && (
          <Html>
            <div>Hiii</div>
          </Html>
        )} */}
      </Canvas>
    </div>
  );
}

export default ProgressContainer;