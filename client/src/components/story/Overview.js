import React from 'react';

const Overview = ({progress, uncompletedTasks, overdueDestinations}) => {
  return ( 
    <div className="overview">
      <p>Uncompleted Tasks Today: {uncompletedTasks.length}</p>
      <p>Overdue Destination: {overdueDestinations.length}</p>
      <p>Progress: {(progress * 100).toFixed(2)}%</p>
    </div>
  );
}
 
export default Overview;