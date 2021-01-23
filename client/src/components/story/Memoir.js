import React, { useState } from 'react';
import moment from 'moment';
import DeleteForm from '../DeleteForm';
import FormMenu from '../FormMenu';

const Memoir = ({...props}) => {
  const { title, description, hoursFought, accomplishmentLevel, date } = props;
  const [viewMode, setViewMode] = useState('default');
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newHoursFought, setNewHoursFought] = useState(description);
  const [newAccomplishmentLevel, setNewAccomplishmentLevel] = useState(description);

  const handleEdit = async e => {
    e.preventDefault();
    // const data = await updateTitle(id, newTitle);

    // if (!data.errors) {
    //   setViewMode('default');
    // }
  };

  const handleDelete = async e => {
    e.preventDefault();
    // const data = await deleteTask(id);

    // if (!data.errors) {
    //   setViewMode('default');
    // }
  };

  return (
    <div className="memoir">
      <FormMenu viewMode={viewMode} setViewMode={setViewMode}/>
      {viewMode === 'edit' && (
        <>
          <form className="form--edit" 
                onSubmit={handleEdit}>
            <input 
              type="text"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}/>
            <textarea
              value={newDescription} 
              name="description"
              onChange={e => setNewDescription(e.target.value)} />
            <div className="form__slider">
              <input type="range" 
                  value={newHoursFought} 
                  defaultValue={hoursFought} 
                  min="0" 
                  max="24" 
                  name="hours"
                  step="1"
                  className="small"
                onChange={e => setNewHoursFought(e.target.value)} />
              <span className="form__number-display">
                {newHoursFought || hoursFought}
              </span>
            </div>
            <div className="form__slider">
              <input type="range" 
                  value={newAccomplishmentLevel}
                  defaultValue={accomplishmentLevel} 
                  min="0" 
                  max="10" 
                  name="accomplishment"
                  step=".1"
                  className="small"
                  onChange={e => setNewAccomplishmentLevel(e.target.value)} />
                <span className="form__number-display">
                  {newAccomplishmentLevel || accomplishmentLevel}
                </span>
            </div>
            <button type="submit">Save Change</button>
          </form>
        </>
      )}
      {viewMode === 'default' && (
        <>
          <p className="mystory__title title">{title}</p>
          <p className="memoir__description">{description}</p>
          <p className="memoir__extra-info">
            <p className="memoir__hours">Hours Fought: {hoursFought}</p>
            <p className="memoir__accomplishment">Accomplishment Level: {accomplishmentLevel}</p>
            <p className="memoir__date">Date: {moment(date).format('MM-DD-YYYY')}</p>
          </p>
        </>
      )}
    </div>
  );
}
 
export default Memoir;