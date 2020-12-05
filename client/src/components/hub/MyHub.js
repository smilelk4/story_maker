import React from 'react';
import { NavLink } from 'react-router-dom';
import NewAdventure from './NewAdventure';
import DestinationContainer from './DestinationContainer';
import HeroContainer from './HeroContainer';
import StoryContainer from './StoryContainer';
import ActivityScroll from '../svg/ActivityScroll';
import DestinationScroll from '../svg/DestinationScroll';
import Scroll2 from '../svg/Scroll2';

const MyHub = () => {
  return ( 
    <div className="hub">
      <main className="hub__main">
        <div className="hub__activity">
          <ActivityScroll />
        </div>
        <div className="hub__destination-container">
          <DestinationScroll />
          <DestinationContainer />
        </div>
      </main>

      <aside className="hub__sidebar">
        <div className="hub__section">
          <div className="hub__icon-holder">
            <NewAdventure />
            {/* <NavLink to='/new-adventure'>Start a New Adventure</NavLink> */}
          </div>
        </div>
        <div className="hub__section">
          <Scroll2 text="Your heroes"/>
          <HeroContainer />
        </div>
        <div className="hub__section">
        <Scroll2 text="Stories"/>
          <StoryContainer />
        </div>
      </aside>
    </div>
  );
}
 
export default MyHub;