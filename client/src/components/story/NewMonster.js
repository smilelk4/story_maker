import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createMemoir } from '../../store/actions/memoirActions';

const NewMonster = () => {
  const dispatch = useDispatch();
  const { id: storyId } = useParams();
  const heroId = useSelector(state => state.hero[0].id);

  const [name, setName] = useState(null);
  const [strength, setStrength] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();

    const data = await dispatch(createMemoir({
      storyId, name, strength
    }));


    if (!data.errors) {
      setName('');
      setStrength(0);
    }
  }

  return ( 
    <form onSubmit={handleSubmit} className="memoir__form">
        <div className="memoir__form-section">
          <label for="name">Name</label>
          <input type="text" 
            value={name} 
            name="name"
            required
            onChange={e => setName(e.target.value)} />
        </div>
        <div className="memoir__form-section">
          <label for="strength">Strength</label>
          <input type="range" 
              value={strength} 
              min="0" 
              max="10" 
              name="strength"
              step="1"
              className="small"
            onChange={e => setStrength(e.target.value)} />
            <span className="memoir__form-number-display">{strength}</span>
        </div>
        <button type="submit">Create a New Monster</button>
    </form>
  );
}
 
export default NewMonster;