import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Scroll2 from '../svg/Scroll2';
import NewDestination from './NewDestination';
import DestinationContainer from '../DestinationContainer';
import StoryHomeContainer from './StoryHomeContainer';
import SideMenuField from './SideMenuField';
import MemoirContainer from './MemoirContainer';
import DailyTaskContainer from './DailyTaskContainer';
import { getStory } from '../../store/actions/storyAction';
import bodymovin from 'lottie-web';

const MyStory = ({...props}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentDisplay, setCurrentDisplay] = useState(<DestinationContainer />);
  const [currentTitle, setCurrentTitle] = useState("Upcoming destinations");

  var svgContainer = document.getElementById('svgContainer');
// var animItem = bodymovin.loadAnimation({
//   wrapper: svgContainer,
//   animType: 'svg',
//   loop: true,
//   path: '/data.json'
// });

  useEffect(() => {
    dispatch(getStory(id));
  }, [id, dispatch]);

  return (  
    <motion.div className="mystory"
                initial="out"
                animate="in"
                exit="out"
                variants={props}>
      <div className="mystory__contents">
       <div className="mystory__main">
         <Scroll2 text={currentTitle} className="mystory__scroll" 
                  width="40rem" fontSize=".5rem" />
         <div className="mystory__container">
          {currentDisplay}
         </div>
       </div>
       <div className="mystory__sidebar-left">
       <SideMenuField >
        <div onClick={() => {
          setCurrentDisplay(<StoryHomeContainer />);
          setCurrentTitle("Story Home");
        }}>
        <p>
          <img className="icon"
            src='/icons/map.png' alt={id}/>
          Story Detail
        </p>
        </div>
       </SideMenuField>
       <SideMenuField >
        <div onClick={() => {
          setCurrentDisplay(<DestinationContainer />);
          setCurrentTitle("Upcoming Destinations");
        }}>
              <p>
          <img className="icon"
            src='/icons/castle.png' alt={id}/>
            <div id="svgContainer"></div>
          Upcoming Destinations
        </p>
        </div>
       </SideMenuField>
       <SideMenuField >
        <div onClick={() => {
          setCurrentDisplay(<DestinationContainer />);
          setCurrentTitle("Past Accomplishments");
        }}>
        <p>
          <img className="icon"
            src='/icons/scroll.png' alt={id}/>
          Past Accomplishments
        </p>
        </div>
       </SideMenuField>
       <SideMenuField>
       <div onClick={() => {
          setCurrentDisplay(<MemoirContainer />);
          setCurrentTitle("Memoirs");
        }}>
        <p>
          <img className="icon"
            src='/icons/moon.png' alt={id}/>
          Memoirs
        </p>
        </div>
       </SideMenuField>
       <SideMenuField>
       <div onClick={() => {
          setCurrentDisplay(<DailyTaskContainer />);
          setCurrentTitle("Daily Tasks");
        }}>
        <p>
          <img className="icon"
            src='/icons/star-stick.png' alt={id}/>
          Daily Tasks
        </p>
        </div>
       </SideMenuField>
       <SideMenuField>
       <div onClick={() => {
          setCurrentDisplay(<DailyTaskContainer />);
          setCurrentTitle("Daily Tasks");
        }}>
        <p>
          <img className="icon"
            src='/icons/monster.png' alt={id}/>
          Monsters
        </p>
        </div>
       </SideMenuField>

       </div>
       <div className="mystory__sidebar-right">
        <NewDestination />
       </div>
      </div>
    </motion.div>
  );
}
 
export default MyStory;