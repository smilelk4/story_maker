import React, { useState } from 'react';

const DailyTask = ({updateTitle, deleteTask, ...props}) => {
  const { id, title } = props;
  const [newTitle, setNewTitle] = useState(title);
  const [viewMode, setViewMode] = useState('default');

  const handleEdit = async e => {
    e.preventDefault();
    const data = await updateTitle(id, newTitle);

    if (!data.errors) {
      setViewMode('default');
    }
  };

  const handleDelete = async e => {
    e.preventDefault();
    const data = await deleteTask(id);

    if (!data.errors) {
      setViewMode('default');
    }
  };

  return ( 
    <div className="daily-task">
      {viewMode === 'edit' && (
        <>
          <p className="daily-task__menu" 
            onClick={() => {setViewMode('default')}}>Close</p>
          <form className="daily-task__form--edit" 
                onSubmit={handleEdit}>
            <input 
              type="text"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}/>
            <button type="submit">Save Change</button>
          </form>
        </>
      )}
      {viewMode === 'delete' && (
        <>
          <p className="daily-task__menu" 
            onClick={() => {setViewMode('default')}}>Close</p>
          <form className="form--delete" 
                onSubmit={handleDelete}>
            <p>Are you sure?</p>
            <p className="title">{title}</p>
            <button type="submit">Delete Task</button>
          </form>
        </>
      )}
      {viewMode === 'default' && (
        <>
          <div className="daily-task__menu">
            <p onClick={() => setViewMode('edit')}>Edit</p>
            <p onClick={() => setViewMode('delete')}>Delete</p>
          </div>
          <p className="daily-task__title">{title}</p>
        </>
      )}
    </div>
  );
}
 
export default DailyTask;