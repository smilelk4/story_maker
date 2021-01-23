import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createMonster } from '../../store/actions/monsterAction';

const NewMonster = () => {
  const dispatch = useDispatch();
  const { id: storyId } = useParams();
  const [name, setName] = useState(null);
  const [strength, setStrength] = useState(1);

  const handleSubmit = async e => {
    e.preventDefault();

    const data = await dispatch(createMonster({
      storyId, name, strength
    }));


    if (!data.errors) {
      setName('');
      setStrength(0);
    }
  }

  return ( 
    <form onSubmit={handleSubmit} className="monster__form">
        <div className="monster__form-section">
          <label htmlFor="name">Name</label>
          <input type="text" 
            value={name} 
            name="name"
            required
            onChange={e => setName(e.target.value)} />
        </div>
        <div className="monster__form-section">
          <label htmlFor="strength">Strength</label>
          <div className="form__slider">
            <input type="range" 
                value={strength} 
                min="1" 
                max="10" 
                name="strength"
                step="1"
                className="small"
              onChange={e => setStrength(e.target.value)} />
              <span className="form__number-display">{strength}</span>
          </div>
        </div>
        <button type="submit">Create a New Monster</button>
    </form>
  );
}
 
export default NewMonster;