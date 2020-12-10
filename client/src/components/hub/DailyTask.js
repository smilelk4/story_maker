import React from 'react';

const DailyTask = (...props) => {
  const { title } = props;
  return ( 
    <div className="task">
      <p className="task__title">{title}</p>
    </div>
  );
}
 
export default DailyTask;