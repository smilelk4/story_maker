import React, { useState } from 'react';

const DailyTask = ({updateTitle, ...props}) => {
  const { title } = props;
  const [newTitle, setNewTitle] = useState(title);
  const [isEditMode, setIsEditMode] = useState(false);

  return ( 
    <div className="daily-task">
      {isEditMode ? (
        <>
          <p className="daily-task__menu" 
            onClick={() => setIsEditMode(false)}>Close</p>
          <form className="daily-task__edit-form" onSubmit={updateTitle}>
            <input 
              type="text"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}/>
            <button type="submit">Save Change</button>
          </form>
        </>
      ) : (
        <>
          <p className="daily-task__menu" 
             onClick={() => setIsEditMode(true)}>Edit</p>
          <p className="daily-task__title">{title}</p>
        </>
      )}
    </div>
  );
}
 
export default DailyTask;