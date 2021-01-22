import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import moment from 'moment';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';

const Destination = ({handleClick, ...props}) => {
  const { id, parent_destination_id: parentDestinationId,
        title, description, target_date: targetDate, Story } = props;
  const [isOverdue, setIsOverDue] = useState(false);
  const path = useLocation().pathname;
  const [isEditMode, setIsEditMode] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const [newTitle, setNewTitle] = useState(title);
  const [newTargetDate, setNewTargetDate] = useState(targetDate);

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

  const handleEdit = () => {

  }

  return ( 
    <form className={isEditMode ? `destination__form--edit` : ''} 
          onSubmit={handleEdit}>
      <div className={`destination ${!parentDestinationId ?
                      'destination__final' : ''}`}>
        <span className="destination__tag--edit" onClick={() => {
                        setIsEditMode(!isEditMode)}}><EditIcon /></span>
        {isEditMode ? (
          <>
            <span>Title: </span>
            <input 
              type="text"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}/>
          </>
        ) : (
          <p className="destination__title title">
          {!parentDestinationId && <img className="icon"
              src='/icons/crown.png' alt={id}/>}{title}
          </p>
        )}
        {isEditMode ? (
          <>
            <span>Description: </span>
            <textarea 
              type="text"
              value={newDescription}
              onChange={e => setNewDescription(e.target.value)}/>
          </>
        ): (
          <p className="destination__description">{description}</p>
        )}
        {isEditMode ? (
          <>
            <span>Target Date: </span>
            <input type="date" 
                      value={newTargetDate} 
                      name="target-date"
                      onChange={e => setNewTargetDate(e.target.value)} />
          </>
        ) : (
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
        )}
        {isEditMode ? <button type="submit">Save Change</button> : ''}
      </div>
    </form>
  );
}
 
export default Destination;