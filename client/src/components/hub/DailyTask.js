import React from 'react';

const DailyTask = ({task}) => {
  const { title, Hero } = task;
  return ( 
    <div className="task">
      <p className="task__title">{title}</p>
    </div>
  );
}
 
export default DailyTask;