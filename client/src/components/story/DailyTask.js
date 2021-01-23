import React, { useState } from 'react';
import DeleteForm from '../DeleteForm';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

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
      <span className="form__menu">
      {viewMode === 'default' ? (
        <>
          <EditIcon onClick={() => setViewMode('edit')}/>
          <DeleteIcon onClick={() => setViewMode('delete')}/>
        </>
      ): (
        <p onClick={() => {setViewMode('default')}}><CloseIcon /></p>
      )}
      </span>
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