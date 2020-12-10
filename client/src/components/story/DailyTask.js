import React from 'react';

const DailyTask = ({...props}) => {
  const { title } = props;

  return ( 
    <div className="daily-task">
      <p className="daily-task__title title">{title}</p>
    </div>
  );
}
 
export default DailyTask;