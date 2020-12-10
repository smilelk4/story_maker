import React from 'react';

const DailyTask = ({task}) => {
  const { title, Hero, last_accomplished } = task;
  return ( 
    <div className="task">
      <p className="task__title">{title}</p>
      <p className="task__hero-name">{Hero.name}</p>
    </div>
  );
}
 
export default DailyTask;