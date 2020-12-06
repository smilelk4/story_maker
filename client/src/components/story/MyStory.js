import React, { useState } from 'react';
import Scroll2 from '../svg/Scroll2';
import NewDestination from './NewDestination';
import DestinationContainer from '../DestinationContainer';
import SideMenuField from './SideMenuField';
import NewMemoir from './NewMemoir';

const MyStory = () => {
  const [currentDisplay, setCurrentDisplay] = useState(<DestinationContainer />);
  const [currentTitle, setCurrentTitle] = useState("Upcoming destinations");

  return (  
    <div className="mystory">
       <div className="mystory__progress">Progress</div>
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
          setCurrentTitle("Upcoming destinations");
        }}>
          View Upcoming Destinations
        </div>
       </SideMenuField>
       <SideMenuField>
       <div onClick={() => {
          setCurrentDisplay(<NewMemoir />);
          setCurrentTitle("Write a Memoir");
        }}>
          Write a Memoir
        </div>
       </SideMenuField>

       </div>
       <div className="mystory__sidebar-right">
        <NewDestination />
       </div>
    </div>
  );
}
 
export default MyStory;