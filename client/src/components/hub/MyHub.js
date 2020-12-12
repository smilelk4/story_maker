import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import NewAdventure from './NewAdventure';
import DestinationContainer from '../DestinationContainer';
import HeroContainer from './HeroContainer';
import StoryContainer from './StoryContainer';
import StatusContainer from './StatusContainer';
import ActivityContainer from './ActivityContainer';
import DailyTaskContainer from './DailyTaskContainer';
import ActivityScroll from '../svg/ActivityScroll';
import DestinationScroll from '../svg/DestinationScroll';
import Scroll2 from '../svg/Scroll2';

const MyHub = ({...props}) => {
  return ( 
    <motion.div className="hub" 
                initial="out"
                animate="in"
                exit="out"
                variants={props}>
      <div className="hub__contents">
        <main className="hub__main">
          <div className="hub__activity left-section">
            <ActivityScroll />
            <ActivityContainer />
          </div>
          <div className="hub__destination-container left-section">
            <DestinationScroll />
            <DestinationContainer />
          </div>
        </main>

        <aside className="hub__sidebar">
          <div className="hub__section">
            <div className="hub__icon-holder">
              <NewAdventure />
            </div>
            <div className="hub__icon-holder">
              <StatusContainer />
            </div>
          </div>
          <div className="hub__section">
            <Scroll2 text="Daily Tasks"/>
            <DailyTaskContainer />
          </div>
          <div className="hub__section">
            <Scroll2 text="Your Heroes"/>
            <HeroContainer />
          </div>
          <div className="hub__section">
            <Scroll2 text="Stories"/>
            <StoryContainer />
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
 
export default MyHub;