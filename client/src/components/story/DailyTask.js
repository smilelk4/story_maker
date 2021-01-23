import React, { useState } from 'react';
import DeleteForm from '../DeleteForm';
import FormMenu from '../FormMenu';

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
      <FormMenu viewMode={viewMode} setViewMode={setViewMode}/>
      {viewMode === 'edit' && (
        <>
          <form className="form--edit" 
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
        <DeleteForm handleDelete={handleDelete} title={title}/>
      )}
      {viewMode === 'default' && (
        <p className="daily-task__title">{title}</p>
      )}
    </div>
  );
}
 
export default DailyTask;