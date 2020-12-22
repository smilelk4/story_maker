import React from 'react';
import DateFormatter from '../../utils/dateFormatter';

const Overview = ({progress}) => {

  return ( 
    <div className="overview">
      Uncompleted Tasks today: 
      Overdue Destination: 
      <p>Progress: {progress * 100}%</p>
    </div>
  );
}
 
export default Overview;