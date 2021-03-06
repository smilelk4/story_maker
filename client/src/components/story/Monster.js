import React, { useState } from 'react';
import moment from 'moment';
import DeleteForm from '../DeleteForm';
import FormMenu from '../FormMenu';

const Monster = ({ id, name, strength, image, timesDefeated, createdAt, 
                   editMonster, deleteMonster }) => {
  const [viewMode, setViewMode] = useState('default');
  const [newName, setNewName] = useState(name);
  const [newStrength, setNewStrength] = useState(strength);

  const handleEdit = async e => {
    e.preventDefault();
    const data = editMonster({id, newName, newStrength});

    if (!data.errors) {
      setViewMode('default');
    }
  }

  const handleDelete = async e => {
    e.preventDefault();
    const data = await deleteMonster(id);
    if (!data.errors) {
      setViewMode('default');
    }
  }

  return ( 
    <div className="monster">
      <FormMenu viewMode={viewMode} setViewMode={setViewMode}/>
      {viewMode === 'edit' && (
        <form className='form--edit' onSubmit={handleEdit}>
          <span>Name: </span>
          <input 
            type="text"
            value={newName}
            onChange={e => setNewName(e.target.value)}/>
          <span>Monster Level: </span>
          <input type="range" 
                value={newStrength} 
                min="1" 
                max="10" 
                name="strength"
                step="1"
                className="small"
              onChange={e => setNewStrength(e.target.value)} />
          <button type="submit">Save Change</button>
        </form>
      )}
      {viewMode === 'delete' && (
        <DeleteForm handleDelete={handleDelete} title={name}/>
      )}
      {viewMode === 'default' && (
        <>
          <div className="monster__info">
            <p className="mystory__title title">{name}</p>
            <p className="strength">Strength: {strength}</p>
            <p className="times-defeated">Times Defeated: {timesDefeated}</p>
            <p className="created-at">Battling Since: {moment(createdAt).format("MM-DD-YYYY")}</p>
          </div>
          <img src={image} alt={id}/>
        </>
      )}
    </div>
  );
}
 
export default Monster;