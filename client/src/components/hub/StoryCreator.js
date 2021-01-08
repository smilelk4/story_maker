import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../config';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../../store/reducers/errorReducer';
import { createStory } from '../../store/actions/storyAction';
import dateFormatter from '../../utils/dateFormatter';

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
  const [targetDate, setTargetDate] = useState(dateFormatter(new Date()));
  const [importance, setImportance] = useState('0');
  const [pageTitle, setPageTitle] = useState('');

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
    if (page === 2) {
      if (heroContainer.current.children.length && heroId) {
        heroContainer.current.childNodes.forEach(child => child.classList.remove('selected'));
        heroContainer.current.childNodes[heroId - 1].classList.add('selected');
      }
    }
  }, [heroId, page]);

  useEffect(() => {
    if (page === 1) {
      setPageTitle('Set Your Story Name');
    } else if (page === 2) {
      setPageTitle('Select Your Hero');
    } else {
      setPageTitle('Set Your Destination');
    }
  }, [page])

  const handleSubmit = async e => {
    if ( !heroId || !title || !destinationTitle || !targetDate || !importance) {
      return dispatch({
        type: LOAD_ERRORS,
        errors: ['There is at least one field with missing value.']
      });
    }
    const data = await dispatch(createStory({ worldId, heroId, title, 
                                destinationTitle, targetDate, importance  }));

    if(!data.errors) {
      setIsModalOpen(false);
    }
  }

  const handleNext = () => {
    if ((page === 1 && !title) || (page === 2 && !heroId)) {
      return dispatch({
        type: LOAD_ERRORS,
        errors: ['Please select/fill out to proceed.']
      });
    }
    dispatch({ type: CLEAR_ERRORS });
    setPage(page + 1);
  }
  
  const handleBack = () => {
    setPage(page - 1);
    dispatch({ type: CLEAR_ERRORS });
  }

  return ( 
    <>
      <h2 className="modal__title title">{pageTitle}</h2>
      {page === 1 && (
        <>
          <div className="modal__field">
            <label for="title">Story Title</label>
            <input type="text" 
              value={title} 
              name="title"
              onChange={e => setTitle(e.target.value)} />
          </div>
        </>
      )}
      {page === 2 && (
        <div className="modal__page-container" ref={heroContainer}> 
          {heroes.length && heroes.map(hero => (
            <div className="hero" onClick={() => {
              setHeroId(hero.id);
              setWorldId(hero.worldId) }}>
              <img src={hero.image} alt={hero.id} />
              <p className="hero__name">{hero.name}</p>
            </div>
          ))}
        </div>
      )}
      {page === 3 && (
        <>
          <div className="modal__field">
            <label for="destination-title">Final Goal</label>
            <input type="text" 
              value={destinationTitle} 
              name="destination-title"
              onChange={e => setDestinationTitle(e.target.value)} />
          </div>
          <div className="modal__field">
            <label for="target-date">Target Date</label>
            <input type="date" 
              value={targetDate} 
              name="target-date"
              onChange={e => setTargetDate(e.target.value)} />
          </div>
          <div className="modal__field">
            <label for="importance">Importance</label>
            <p>{importance}</p>
            <input type="range" 
              value={importance}
              min="0" 
              max="10" 
              name="importance"
              step=".01"
              onChange={e => setImportance(e.target.value)} />
          </div>
          <button onClick={handleSubmit}>Create Story</button>
        </>
      )}
      <div className="modal__errors-container">
        {errors.map(error => (
          <div>{error}</div>
        ))}
      </div>
      <div className="modal__button-container">
        <button disabled={page < 2} onClick={handleBack}>Back</button>
        <button disabled={page > 2} onClick={handleNext}>Next</button>
      </div>
    </>
  );
}
 
export default StoryCreator;