import React from 'react';

const DailyTask = ({task, handleClick}) => {
  const { id, title } = task;
  return ( 
    <div className="task">
      <p className="task__title">{title}</p>
      <p className="daily-task__complete"
        onClick={() => handleClick(id)}>Complete</p>
    </div>
  );
}
 
export default DailyTask;