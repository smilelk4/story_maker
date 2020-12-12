import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Scroll2 from '../svg/Scroll2';
import NewDestination from './NewDestination';
import DestinationContainer from '../DestinationContainer';
import SideMenuField from './SideMenuField';
import MemoirContainer from './MemoirContainer';
import DailyTaskContainer from './DailyTaskContainer';
import { getStory } from '../../store/actions/storyAction';

const MyStory = ({...props}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentDisplay, setCurrentDisplay] = useState(<DestinationContainer />);
  const [currentTitle, setCurrentTitle] = useState("Upcoming destinations");

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
          setCurrentDisplay(<DestinationContainer />);
          setCurrentTitle("Upcoming Destinations");
        }}>
          Upcoming Destinations
        </div>
       </SideMenuField>
       <SideMenuField>
       <div onClick={() => {
          setCurrentDisplay(<MemoirContainer />);
          setCurrentTitle("Memoirs");
        }}>
          Memoirs
        </div>
       </SideMenuField>
       <SideMenuField>
       <div onClick={() => {
          setCurrentDisplay(<DailyTaskContainer />);
          setCurrentTitle("Daily Tasks");
        }}>
          Daily Tasks
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