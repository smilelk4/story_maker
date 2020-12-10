import React from 'react';

const DailyTask = ({task, handleClick}) => {
  const { id, title } = task;
  return ( 
    <div className="task">
      <p className="task__title">{title}</p>
      <p className="task__complete"
        onClick={() => handleClick(id)}>&#10003;</p>
    </div>
  );
}
 
export default DailyTask;