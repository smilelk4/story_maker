import React, { useRef } from 'react';
import CheckIcon from '@material-ui/icons/Check';

const DailyTask = ({task, handleClick}) => {
  const { id, title, Story } = task;
  const checkboxContainer = useRef();

  return ( 
    <div className="task">
      <p className="task__title">{title}</p>
      <div className="task__complete">
        <p ref={checkboxContainer}
           onClick={() => handleClick(id, Story.hero_id)}><CheckIcon />
        </p>
      </div>
    </div>
  );
}
 
export default DailyTask;