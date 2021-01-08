import React from 'react';
import { useSelector } from 'react-redux';
import NewAdventure from './NewAdventure';
import DestinationContainer from '../DestinationContainer';
import HeroContainer from './HeroContainer';
import StoryContainer from './StoryContainer';
import Greeting from './Greeting';
import StatusContainer from './StatusContainer';
import ActivityContainer from './ActivityContainer';
import DailyTaskContainer from './DailyTaskContainer';
import ActivityScroll from '../svg/ActivityScroll';
import DestinationScroll from '../svg/DestinationScroll';
import Scroll2 from '../svg/Scroll2';

const MyHub = () => {
  const user = useSelector(state => state.user);

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
              <div className="hub__greet">
                <Greeting {...user}/>
                <NewAdventure />
              </div>
            </div>
            <div className="hub__icon-holder">
              <StatusContainer />
            </div>
          </div>
          <div className="hub__section">
            <Scroll2 text="Daily Tasks" className="scroll-svg"/>
            <DailyTaskContainer />
          </div>
          <div className="hub__section">
            <Scroll2 text="Your Heroes" className="scroll-svg"/>
            <HeroContainer />
          </div>
          <div className="hub__section">
            <Scroll2 text="Stories" className="scroll-svg"/>
            <StoryContainer />
          </div>
        </aside>
      </div>
    </div>
  );
}
 
export default MyHub;