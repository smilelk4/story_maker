import React from 'react';
import DateFormatter from '../../utils/dateFormatter';

const Overview = ({progress, uncompletedTasks, overdueDestinations}) => {

  return ( 
    <div className="overview">
      <p>Uncompleted Tasks today: {uncompletedTasks.length}</p>
      <p>Overdue Destination: {overdueDestinations.length}</p>
      <p>Progress: {progress * 100}%</p>
    </div>
  );
}
 
export default Overview;