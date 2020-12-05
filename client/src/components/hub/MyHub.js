import React from 'react';
import { NavLink } from 'react-router-dom';
import NewAdventure from './NewAdventure';
import DestinationContainer from './DestinationContainer';
import HeroContainer from './HeroContainer';
import StoryContainer from './StoryContainer';
import ActivityScroll from '../svg/ActivityScroll';
import DestinationScroll from '../svg/DestinationScroll';
import HeroScroll from '../svg/HeroScroll';
import StoryScroll from '../svg/StoryScroll';

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
          <HeroScroll />
          <HeroContainer />
        </div>
        <div className="hub__section">
          <StoryScroll />
          <StoryContainer />
        </div>
      </aside>
    </div>
  );
}
 
export default MyHub;