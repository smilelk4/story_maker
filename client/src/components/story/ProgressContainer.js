import React, { useEffect, Suspense, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Physics } from "@react-three/cannon";
import { useSpring, config } from '@react-spring/core';
import { useGesture } from 'react-use-gesture';
import { a } from '@react-spring/three';
import clamp from "lodash/clamp";

import { getHero } from '../../store/actions/heroAction';
import Progress from './Progress';

import { Plane, Cube } from './Progress';

const ProgressContainer = () => {
  const dispatch = useDispatch();
  const heroId = useSelector(state => state.story[0] ? 
                  state.story[0].hero_id : null);
  const destinations = useSelector(state => state.destination);
  let x = -8;

  useEffect(() => {
    dispatch(getHero(heroId));
  }, [heroId, dispatch]);

  return ( 
    <div className="progress__container">
      <Canvas
        colorManagement
        // camera={{position:[0, 0, 120], fov: 1}}
      >
        <Camera position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        {destinations.map(destination => {
          x += 2;
          return <Box position={[x, 0, 0]} />
        })}
        
        {/* <Box position={[1.2, 0, 0]} />
        <Box position={[4, 0, 0]} /> */}
        {/* <Physics>
          <Plane />
          <Cube />
        </Physics> */}
      </Canvas>
    </div>
  );
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Camera(props) {
  const [y] = Scroll([-100, 100], { domTarget: window });
  const ref = useRef()
  const { setDefaultCamera } = useThree()
  useEffect(() => void setDefaultCamera(ref.current), [])
  useFrame(() => ref.current.updateMatrixWorld())
  return <a.perspectiveCamera ref={ref} {...props} position-y={y.to((y) => (y / 500) * 25)}/>
}

function Scroll(bounds, props) {
  const [{ y }, set] = useSpring(() => ({ y: 0, config: config.slow }));
  const fn = useCallback(
    ({ xy: [, cy], previous: [, py], memo = y.get() }) => {
      const newY = clamp(memo + cy - py, ...bounds);
      set({ y: newY });
      return newY;
    },
    [bounds, y, set]
  );
  const bind = useGesture({ onWheel: fn, onDrag: fn }, props);
  useEffect(() => props && props.domTarget && bind(), [props, bind]);
  return [y, bind];
}
 
export default ProgressContainer;