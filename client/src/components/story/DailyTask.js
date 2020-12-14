import React, { useState, useEffect } from 'react';

const DailyTask = ({updateTitle, ...props}) => {
  const { id, title } = props;
  const [newTitle, setNewTitle] = useState(title);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await updateTitle(id, newTitle, setIsEditMode);

    if (!data.errors) {
      setIsEditMode(false);
    }
  };

  return ( 
    <div className="daily-task">
      {isEditMode ? (
        <>
          <p className="daily-task__menu" 
            onClick={() => setIsEditMode(false)}>Close</p>
          <form className="daily-task__edit-form" 
                onSubmit={handleSubmit}>
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