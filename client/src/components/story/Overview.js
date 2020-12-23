import React from 'react';
import DateFormatter from '../../utils/dateFormatter';

const Overview = ({progress, uncompletedTasks}) => {

  return ( 
    <div className="overview">
      <p>Uncompleted Tasks today: {uncompletedTasks.length}</p>
      <p>Overdue Destination: </p>
      <p>Progress: {progress * 100}%</p>
    </div>
  );
}
 
export default Overview;