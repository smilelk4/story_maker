import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Scroll2 from '../svg/Scroll2';
import NewDestination from './NewDestination';
import DestinationContainer from '../DestinationContainer';
import StoryHomeContainer from './StoryHomeContainer';
import SideMenuField from './SideMenuField';
import MemoirContainer from './MemoirContainer';
import MonsterContainer from './MonsterContainer';
import HistoryContainer from './HistoryContainer';
import DailyTaskContainer from './DailyTaskContainer';
import OverviewContainer from './OverviewContainer';
import FightMonster from './FightMonster';
import { getStory } from '../../store/actions/storyAction';
import { clearTasksAction } from '../../store/reducers/dailyTaskReducer';
import { clearActivitiesAction } from '../../store/reducers/activityReducer';
import { clearMemoirsAction } from '../../store/reducers/memoirReducer';
import { clearProgressAction } from '../../store/reducers/progressReducer';

const MyStory = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentDisplay, setCurrentDisplay] = useState(<StoryHomeContainer />);
  const [currentTitle, setCurrentTitle] = useState("Story Detail");
  const story = useSelector(state => state.story ? state.story[0] : null);

  useEffect(() => {
    dispatch(getStory(id));
  }, [id, dispatch])

  useEffect(() => {
    dispatch(clearTasksAction());
    dispatch(clearActivitiesAction());
    dispatch(clearMemoirsAction());
    dispatch(clearProgressAction());
  }, [story, dispatch]);

  return (  
    <div className="mystory">
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
        <div
          className="mystory__sidebar-menu" 
          onClick={() => {
            setCurrentDisplay(<StoryHomeContainer />);
            setCurrentTitle("Story Detail");
        }}>
          <img className="icon"
            src='/icons/map.png' alt={id}/>
          <p>Story Detail</p>
        </div>
       </SideMenuField>
       <SideMenuField >
        <div 
          className="mystory__sidebar-menu"
          onClick={() => {
            setCurrentDisplay(<DestinationContainer />);
            setCurrentTitle("Upcoming Destinations");
        }}>
          <img className="icon"
            src='/icons/castle.png' alt={id}/>
            <div id="svgContainer"></div>
          <p>Upcoming Destinations</p>
        </div>
       </SideMenuField>
       <SideMenuField >
        <div 
          className="mystory__sidebar-menu"
          onClick={() => {
            setCurrentDisplay(<HistoryContainer />);
            setCurrentTitle("History");
        }}>
          <img className="icon"
            src='/icons/scroll.png' alt={id}/>
          <p>History</p>
        </div>
       </SideMenuField>
       <SideMenuField>
       <div 
          className="mystory__sidebar-menu"
          onClick={() => {
            setCurrentDisplay(<MemoirContainer />);
            setCurrentTitle("Memoirs");
        }}>
          <img className="icon"
            src='/icons/moon.png' alt={id}/>
          <p>Memoirs</p>
        </div>
       </SideMenuField>
       <SideMenuField>
       <div 
          className="mystory__sidebar-menu"  
          onClick={() => {
            setCurrentDisplay(<DailyTaskContainer />);
            setCurrentTitle("Daily Tasks");
        }}>
          <img className="icon"
            src='/icons/star-stick.png' alt={id}/>
          <p>Daily Tasks</p>
        </div>
       </SideMenuField>
       <SideMenuField>
       <div 
          className="mystory__sidebar-menu"
          onClick={() => {
            setCurrentDisplay(<MonsterContainer />);
            setCurrentTitle("Monsters");
        }}>
          <img className="icon"
            src='/icons/monster.png' alt={id}/>
          <p>Monsters</p>
        </div>
       </SideMenuField>

       </div>
       <div className="mystory__sidebar-right">
        <div className="mystory__sidebar-right-top-container">
          <FightMonster />
          <OverviewContainer />
        </div>
        <NewDestination />
       </div>
      </div>
    </div>
  );
}
 
export default MyStory;