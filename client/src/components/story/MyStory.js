import React from 'react';
import DestinationScroll2 from '../svg/DestinationScroll';

const MyStory = () => {
  return (  
    <div className="mystory">
       <div className="mystory__progress">Progress</div>
       <div className="mystory__main">
         <DestinationScroll2 className="mystory__destination-scroll"/>
       </div>
       <div className="mystory__sidebar-left">Aside</div>
       <div className="mystory__sidebar-right">Aside</div>
    </div>
  );
}
 
export default MyStory;