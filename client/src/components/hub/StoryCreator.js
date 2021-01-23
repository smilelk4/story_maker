import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { baseUrl } from '../../config';
import { loadErrors, clearErrors } from '../../store/reducers/errorReducer';
import { createStory } from '../../store/actions/storyAction';

const StoryCreator = ({setIsModalOpen}) => {
  const dispatch = useDispatch();
  const heroContainer = useRef();
  const heroes = useSelector(state => state.hero);
  const errors = useSelector(state => state.errors);

  const [page, setPage] = useState(1);
  const [worlds, setWorlds] = useState([]);
  const [worldId, setWorldId] = useState(null);
  const [heroId, setHeroId] = useState(null);
  const [title, setTitle] = useState('');
  const [destinationTitle, setDestinationTitle] = useState('');
  const [targetDate, setTargetDate] = useState(moment());
  const [importance, setImportance] = useState('0');
  const [pageTitle, setPageTitle] = useState('You don\'t have any heroes yet.');

  useEffect(() => {
    (async () => {
      if (!worlds.length) {
        const res = await fetch(`${baseUrl}/worlds`, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        });
        const data = await res.json();
        setWorlds(data.worlds);
      }
    })();
  }, [worlds]);

  useEffect(() => {
    if (page === 1 && heroes.length) {
      setPageTitle('Set Your Story Name');
    } else if (page === 2 && heroes.length) {
      setPageTitle('Select Your Hero');
    } else if (page === 3 && heroes.length) {
      setPageTitle('Set Your Destination');
    }
  }, [page, heroes.length])

  const handleSubmit = async e => {
    if (!heroId || !title || !destinationTitle || !targetDate || !importance) {
      return dispatch(loadErrors(['There is at least one field with missing value.']));
    }
    const data = await dispatch(createStory({ worldId, heroId, title, 
                                destinationTitle, targetDate, importance  }));

    if(!data.errors) {
      setIsModalOpen(false);
    }
  }

  const handleNext = () => {
    if ((page === 1 && !title) || (page === 2 && !heroId)) {
      return dispatch(loadErrors(['Please select/fill out to proceed.']));
    }
    dispatch(clearErrors());
    setPage(page + 1);
  }
  
  const handleBack = () => {
    setPage(page - 1);
    dispatch(clearErrors());
  }

  return ( 
    <>
      <h2 className="modal__title title">{pageTitle}</h2>
      {page === 1 && (heroes.length ? (
          <div className="modal__field">
            <label htmlFor="title">Story Title</label>
            <input type="text" 
              value={title} 
              name="title"
              onChange={e => setTitle(e.target.value)} />
          </div>
      ) : (
        <p className="modal__field--no-proceed">
          To create a story, first create a hero from "Your Heroes" section.
        </p>
      ))}
      {page === 2 && (
        <div className="modal__page-container" ref={heroContainer}> 
          {heroes.length && heroes.map(hero => (
            <div key={hero.id} className="hero" onClick={e => {
              setHeroId(hero.id);
              setWorldId(hero.worldId)
              heroContainer.current.childNodes.forEach(child => {
              child.classList.remove('modal__content--selected')});
              e.target.classList.add('modal__content--selected')}}>
              <img src={hero.image} alt={hero.id} />
              <p className="hero__name">{hero.name}</p>
            </div>
          ))}
        </div>
      )}
      {page === 3 && (
        <>
          <div className="modal__field">
            <label htmlFor="destination-title">Final Goal</label>
            <input type="text" 
              value={destinationTitle} 
              name="destination-title"
              onChange={e => setDestinationTitle(e.target.value)} />
          </div>
          <div className="modal__field">
            <label htmlFor="target-date">Target Date</label>
            <input type="date" 
              value={targetDate} 
              name="target-date"
              onChange={e => setTargetDate(e.target.value)} />
          </div>
          <div className="modal__field">
            <label htmlFor="importance">Importance</label>
            <div className="form__slider">
              <input type="range" 
                value={importance}
                min="0" 
                max="10" 
                name="importance"
                step=".01"
                onChange={e => setImportance(e.target.value)} />
                <span className="form__number-display">{importance}</span>
            </div>
          </div>
          <button onClick={handleSubmit}>Create Story</button>
        </>
      )}
      <div className={`modal__button-container${!heroes.length ? '--no-proceed' : ''}`}>
        {heroes.length ? (
          <>
            <button disabled={page < 2} onClick={handleBack}>Back</button>
            <div className="modal__errors-container">
            {errors.map(error => (
              <div key={error.message}>{error}</div>
            ))}
            </div>
            <button disabled={page > 2} onClick={handleNext}>Next</button>
          </>
        ) : (
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        )}
      </div>
    </>
  );
}
 
export default StoryCreator;