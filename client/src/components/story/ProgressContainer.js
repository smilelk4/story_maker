import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import { Physics } from "@react-three/cannon";
import { Sky } from 'drei';
import { Vector3 } from 'three';

import Plane from '../three/Plane';
import Node from '../three/Node';
import Camera from '../three/Camera';
import Hero from '../three/Hero';

import { getHero } from '../../store/actions/heroAction';

const ProgressContainer = () => {
  const dispatch = useDispatch();
  const heroId = useSelector(state => state.story[0] ? 
                  state.story[0].hero_id : null);
  const hero = useSelector(state => state.hero[0]);
  const destinations = useSelector(state => state.destination);
  const [active, setActive] = useState(null);
  const container = useRef();
  let x = -10;

  useEffect(() => {
    dispatch(getHero(heroId));
  }, [heroId, dispatch]);

  return ( 
    <div ref={container} className="progress__container">
      <Canvas
        onCreated={({ gl }) => gl.setClearColor('lightblue')}
        colorManagement>
        <Camera position={[0, 1, 20]}
                reference={container.current}/>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={3} />
        <Sky sunPosition={new Vector3(10, 20, 100)}/>
        <Physics
          velocity={0}
          gravity={[0, -5, 0]} >
          {destinations.map(destination => {
            x += 3;
            return <Node
                      destination={destination} 
                      active={active}
                      setActive={setActive}
                      position={[x, 5, 0]} />
          })}
          <Hero hero={hero}
                active={active}
                setActive={setActive}
                position={[-10, 5, 0]} />
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