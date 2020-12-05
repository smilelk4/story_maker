import React from 'react';
import Scroll2 from '../svg/Scroll2';
import NewDestination from './NewDestination';
import DestinationContainer from '../DestinationContainer';

const MyStory = () => {
  return (  
    <div className="mystory">
       <div className="mystory__progress">Progress</div>
       <div className="mystory__main">
         <Scroll2 text="Upcoming destinations" className="mystory__scroll" 
                  width="40rem" fontSize=".5rem" />
         <div className="mystory__destination-container">
          {/* <div className="mystory__destination"> */}
            {/* <h3>Destination</h3>
          </div>
          <div className="mystory__destination">
            <h3>Destination</h3>
          </div> */}
          <DestinationContainer />
         </div>
       </div>
       <div className="mystory__sidebar-left">
       View Upcoming Destinations
       Write a Memoir
       </div>
       <div className="mystory__sidebar-right">
        <NewDestination />
       </div>
    </div>
  );
}
 
export default MyStory;