import React from 'react';
import { NavLink } from 'react-router-dom';
import DestinationContainer from './DestinationContainer';
import ActivityScroll from '../svg/ActivityScroll';
import DestinationScroll from '../svg/DestinationScroll';
import HeroScroll from '../svg/HeroScroll';
import StoryScroll from '../svg/StoryScroll';

const MyHub = () => {
  return ( 
    <div className="hub">
      <header className='hub__header'>
        <nav className="hub__navbar"></nav>
      </header>
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
        <div className="hub__top-container">
          <div className="hub__icon-holder">
            <NavLink to='/new-adventure'>Start a New Adventure</NavLink>
          </div>
        </div>
        <div className="hub__hero-container">
          <HeroScroll />
        </div>
        <div className="hub__story-container">
          <StoryScroll />
        </div>
      </aside>
    </div>
  );
}
 
export default MyHub;