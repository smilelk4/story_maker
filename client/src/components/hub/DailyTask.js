import React, { useRef } from 'react';
import bodymovin from 'lottie-web';
import { check } from 'express-validator';

const DailyTask = ({task, handleClick}) => {
  const { id, title, Story } = task;
  const checkboxContainer = useRef();

  return ( 
    <div className="task">
      <p className="task__title">{title}</p>
      <p className="task__complete"
        ref={checkboxContainer}
        onClick={e => handleClick(id, Story.hero_id)}>&#10003;
        </p>
    </div>
  );
}
 
export default DailyTask;