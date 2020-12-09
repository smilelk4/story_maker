import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createMemoir } from '../../store/actions/memoirActions';

const NewMemoir = () => {
  const dispatch = useDispatch();
  const { id: storyId } = useParams();
  const heroId = useSelector(state => state.hero[0].id);

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [hoursFought, setHoursFought] = useState(0);
  const [accomplishmentLevel, setAccomplishmentLevel] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();

    const data = await dispatch(createMemoir({
      heroId, storyId, title, description, hoursFought, accomplishmentLevel
    }));


    if (!data.errors) {
      setTitle('');
      setDescription('');
      setHoursFought(0);
      setAccomplishmentLevel(0);
    }
  }

  return ( 
    <form onSubmit={handleSubmit} className="memoir__form">
        <div>
          <label for="title">Title</label>
          <input type="text" 
            value={title} 
            name="title"
            required
            onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label for="description">Description</label>
          <input type="textarea" 
            value={description} 
            name="description"
            onChange={e => setDescription(e.target.value)} />
        </div>
        <div>
          <label for="hours">Hours Fought</label>
          <input type="number" 
            value={hoursFought} 
            name="hours"
            min = "0"
            max = "24"
            onChange={e => setHoursFought(e.target.value)} />
        </div>
        <div>
          <label for="accomplishment">Accomplishment</label>
          <input type="number" 
            value={accomplishmentLevel} 
            name="accomplishment"
            min = "0"
            max = "10"
            onChange={e => setAccomplishmentLevel(e.target.value)} />
        </div>
        <button type="submit">Create a New Memoir</button>
    </form>
  );
}
 
export default NewMemoir;