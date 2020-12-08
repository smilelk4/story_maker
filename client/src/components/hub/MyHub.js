import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import NewAdventure from './NewAdventure';
import DestinationContainer from '../DestinationContainer';
import HeroContainer from './HeroContainer';
import StoryContainer from './StoryContainer';
import ActivityContainer from './ActivityContainer';
import ActivityScroll from '../svg/ActivityScroll';
import DestinationScroll from '../svg/DestinationScroll';
import Scroll2 from '../svg/Scroll2';

const MyHub = () => {
  return ( 
    <div className="hub">
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
    </div>
  );
}
 
export default MyHub;