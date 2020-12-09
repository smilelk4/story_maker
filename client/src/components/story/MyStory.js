import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Scroll2 from '../svg/Scroll2';
import NewDestination from './NewDestination';
import DestinationContainer from '../DestinationContainer';
import SideMenuField from './SideMenuField';
import ProgressContainer from './ProgressContainer';
import MemoirContainer from './MemoirContainer';
import { getStory } from '../../store/actions/storyAction';

const MyStory = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentDisplay, setCurrentDisplay] = useState(<DestinationContainer />);
  const [currentTitle, setCurrentTitle] = useState("Upcoming destinations");

  useEffect(() => {
    dispatch(getStory(id));
  }, [id, dispatch]);

  return (  
    <div className="mystory">
      <div className="mystory__contents">
       {/* <div className="mystory__progress">
         <ProgressContainer />
       </div> */}
       <div className="mystory__main">
         <Scroll2 text={currentTitle} className="mystory__scroll" 
                  width="40rem" fontSize=".5rem" />
         <div className="mystory__container">
          {currentDisplay}
         </div>
       </div>
       <div className="mystory__sidebar-left">
       <SideMenuField>
        <div onClick={() => {
          setCurrentDisplay(<DestinationContainer />);
          setCurrentTitle("Upcoming Destinations");
        }}>
          View Upcoming Destinations
        </div>
       </SideMenuField>
       <SideMenuField>
       <div onClick={() => {
          setCurrentDisplay(<MemoirContainer />);
          setCurrentTitle("View Memoirs");
        }}>
          Memoirs
        </div>
       </SideMenuField>

       </div>
       <div className="mystory__sidebar-right">
        <NewDestination />
       </div>
      </div>
    </div>
  );
}
 
export default MyStory;