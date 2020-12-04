import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { baseUrl } from '../../config';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../../store/reducers/errorReducer';
import { createStory } from '../../store/actions/storyAction';

const StoryCreator = () => {
  const dispatch = useDispatch();
  const worldContainer = useRef();
  const heroContainer = useRef();

  const [page, setPage] = useState(1);
  const [worlds, setWorlds] = useState([]);
  const [worldId, setWorldId] = useState(null);
  const [heroId, setHeroId] = useState(null);
  const [heroes, setHeroes] = useState([]);
  const [title, setTitle] = useState('');
  const [goal, setGoal] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    (async () => {
      if (!worlds.length) {
        const res = await fetch(`${baseUrl}/worlds`);
        const data = await res.json();
        setWorlds(data.worlds);
      }
    })();
  }, [worlds]);

  useEffect(() => {
    (async () => {
      if (!heroes.length) {
        const res = await fetch(`${baseUrl}/heroes`);
        const data = await res.json();
        setHeroes(data.heroImages);
      }
    })();
  }, [heroes])

  useEffect(() => {
    if (page === 1) {
      if (worldContainer.current.children.length && worldId) {
        worldContainer.current.childNodes.forEach(child => child.classList.remove('selected'));
        worldContainer.current.childNodes[worldId - 1].classList.add('selected');
      }
    }
  }, [worldId, page])

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
      setPageTitle('Select Your World');
    } else if (page === 2) {
      setPageTitle('Select Your Hero');
    } else {
      setPageTitle('Decide on Your Story');
    }
  }, [page])

  const handleSubmit = e => {
    if (!worldId || !heroId || !title || !goal) {
      return dispatch({
        type: LOAD_ERRORS,
        errors: ['There is a field with missing values.']
      });
    }
    const data = {
      worldId,
      heroId,
      title,
      goal
    };
    dispatch(createStory(data));
  }

  
  const handleNext = () => {
    if ((page === 1 && !worldId) || (page === 2 && !heroId)) {
      return dispatch({
        type: LOAD_ERRORS,
        errors: ['Please select to proceed.']
      });
    }
    dispatch({ type: CLEAR_ERRORS });
    setPage(page + 1);
  }
  
  const handleBack = () => {
    setPage(page - 1);
  }

  return ( 
    <>
      <h2>{pageTitle}</h2>
      {page === 1 && (
        <div className="modal__page-container" ref={worldContainer}> 
          {worlds.length && worlds.map(world => (
            <div className="world" onClick={() => setWorldId(world.id)}>
              <div className="world__name">{world.name}</div>
            </div>
          ))}
        </div>
      )}
      {page === 2 && (
        <div className="modal__page-container" ref={heroContainer}> 
          {heroes.length && heroes.map(hero => (
            <div className="hero" onClick={() => setHeroId(hero.id)}>
              <img src={hero.image_url} alt={hero.id} />
            </div>
          ))}
        </div>
      )}
      {page === 3 && (
        <>
          <div>
            <label for="title">Story Title</label>
            <input type="text" 
              value={title} 
              name="title"
              onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <label for="goal">Final Goal</label>
            <input type="text" 
              value={goal} 
              name="goal"
              onChange={e => setGoal(e.target.value)} />
          </div>
          <button onClick={handleSubmit}>Create Story</button>
        </>
      )}
      <button hidden={page < 2} onClick={handleBack}>Back</button>
      <button hidden={page > 2} onClick={handleNext}>Next</button>
    </>
  );
}
 
export default StoryCreator;