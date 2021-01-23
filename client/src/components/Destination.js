import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import moment from 'moment';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

const Destination = ({handleClick, editDestination, deleteDestination, ...props}) => {
  const { id, parent_destination_id: parentDestinationId,
        title, description, target_date: targetDate, Story } = props;
  const [isOverdue, setIsOverDue] = useState(false);
  const path = useLocation().pathname;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newTargetDate, setNewTargetDate] = useState(targetDate);
  const [viewMode, setViewMode] = useState('default');

  const today = new Date();
  const target = new Date(targetDate);
  const timeDiff = target.getTime() - today.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  useEffect(() => {
    if (dayDiff < 0) {
      setIsOverDue(true);
    } else {
      setIsOverDue(false);
    }
  }, [targetDate, dayDiff])

  const handleEdit = async e => {
    e.preventDefault();
    const data = editDestination({id, newTitle, newDescription, newTargetDate});
    if (!data.errors) {
      setViewMode('default');
    }
  }

  const handleDelete = async e => {
    e.preventDefault();
    const data = deleteDestination(id);
    if (!data.errors) {
      setViewMode('default');
    }
  }

  return ( 
    <div className={`destination ${!parentDestinationId ?
                    'destination__final' : ''}`}>
      <span className="form__menu">
        {viewMode === 'default' ? (
          <>
            <EditIcon onClick={() => setViewMode('edit')}/>
            {parentDestinationId && (
              <DeleteIcon onClick={() => setViewMode('delete')}/>
            )}
          </>
        ) : (
          <p onClick={() => {setViewMode('default')}}><CloseIcon /></p>
        )}
      </span>
      {viewMode === 'edit' && (
        <form className='form--edit' onSubmit={handleEdit}>
          <span>Title: </span>
          <input 
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}/>
          <span>Description: </span>
          <textarea 
            type="text"
            value={newDescription}
            onChange={e => setNewDescription(e.target.value)}/>
          <span>Target Date: </span>
          <input type="date" 
                    value={newTargetDate} 
                    name="target-date"
                    onChange={e => setNewTargetDate(e.target.value)} />
          <button type="submit">Save Change</button>
        </form>
      )}
      {viewMode === 'delete' && (
        <form className="form--delete" 
              onSubmit={handleDelete}>
          <p>Are you sure?</p>
          <p className="title">{title}</p>
          <button type="submit">Delete Destination</button>
        </form>
      )}
      {viewMode === 'default' && (
        <>
          <p className="destination__title title">
          {!parentDestinationId && <img className="icon"
              src='/icons/crown.png' alt={id}/>}{title}
          </p>
          <p className="destination__description">{description}</p>
          <div className="destination__stats">
            <div className="destination__days">
              {isOverdue ? (
                <p className="destination__alert--complete">Overdue</p>
              ) : (
                <p className="destination__alert--incomplete">{dayDiff} Days Left</p>
              )}
              <p onClick={() => handleClick(id)} 
                className="destination__complete"><CheckIcon />
                  Mark as Accomplished
              </p>
              <div className="destination__info">
                <p className="destination__target-date">
                  Target Date: {moment(targetDate).format('MM-DD-YYYY')}
                </p>
                {path === '/my-hub' && (
                  <p className="destination__story">
                    Story: {Story && Story.title}
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
 
export default Destination;