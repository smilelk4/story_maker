import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { Physics } from "@react-three/cannon";
import { Sky } from 'drei';
import { Vector3 } from 'three';
import Trees from '../three/Trees';
import Castle from '../three/Castle';
import Plane from '../three/Plane';
import Node from '../three/Node';
import Camera from '../three/Camera';
import Hero from '../three/Hero';
import { getHero } from '../../store/actions/heroAction';
import { getProgress } from '../../store/actions/progressAction';
import { getMemoirs } from '../../store/actions/memoirActions';
import { getDailyTasks } from '../../store/actions/dailyTaskAction';
import { clearDestinationsAction } from '../../store/reducers/destinationReducer';

const ProgressHeader = () => {
  const dispatch = useDispatch();
  const heroId = useSelector(state => state.story[0] ? 
                  state.story[0].hero_id : null);
  const story = useSelector(state => state.story[0]);
  const hero = useSelector(state => state.hero[0]);
  const progress = useSelector(state => state.progress);
  const [active, setActive] = useState(null);
  const [heroPosition, setHeroPosition] = useState(0);
  const container = useRef();
  const { id } = useParams();

  const minHeroXPosition = -7;
  const maxHeroXPosition = 7;
  const maxHeroXPositionRange = Math.abs(minHeroXPosition) + Math.abs(maxHeroXPosition);
  let nodePosition = minHeroXPosition;

  useEffect(() => {
    dispatch(clearDestinationsAction());
  }, [dispatch])

  useEffect(() => {
    if (heroId) {
      dispatch(getHero(heroId));
    }
  }, [heroId, dispatch]);

  useEffect(() => {
    if (story) {
      dispatch(getProgress(story.id));
      dispatch(getMemoirs(story.id));
      dispatch(getDailyTasks(story.id));
    }
  }, [story, id, dispatch]);

  useEffect(() => {
    setHeroPosition(maxHeroXPositionRange * progress);
  }, [progress, maxHeroXPositionRange, dispatch]);

  return ( 
    <Canvas
        onCreated={({ gl }) => gl.setClearColor('lightblue')}
        colorManagement>
      <Camera position={[0, 1, 25]}
          reference={container.current}/>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={3} />
      <Sky sunPosition={new Vector3(10, 20, 100)}/>
      <Physics
        velocity={0}
        gravity={[0, -10, 0]} >
        <Trees position={[-8, 5.28, 0]}/>
        <Castle position={[8.5, 5, 0]}/>
        {[0,0,0,0,0,0,0,0].map(destination => {
          nodePosition += 1.55;
          return <Node
                    key={destination.id}
                    destination={destination} 
                    active={active}
                    setActive={setActive}
                    position={[nodePosition, 5, 3]}/>
        })}
        <Hero hero={hero}
              active={active}
              setActive={setActive}
              // position={[6, 5, 5]} 
              position={[minHeroXPosition + heroPosition, 5, 5]} />
        <Plane />
      </Physics>
    </Canvas>
  )


}

export default ProgressHeader;