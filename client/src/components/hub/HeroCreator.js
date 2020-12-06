import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../config';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../../store/reducers/errorReducer';
import { createHero } from '../../store/actions/heroAction';

const HeroCreator = ({clickHandler}) => {
  const dispatch = useDispatch();
  const worldContainer = useRef();
  const heroContainer = useRef();
  const userId = useSelector(state => state.user.id);

  const [page, setPage] = useState(1);
  const [heroes, setHeroes] = useState([]);
  const [worlds, setWorlds] = useState([]);
  const [worldId, setWorldId] = useState(null);
  const [heroId, setHeroId] = useState(null);
  const [name, setName] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    (async () => {
      if (heroes && !heroes.length) {
        const res = await fetch(`${baseUrl}/heroes`);
        const data = await res.json();
        setHeroes(data.heroImages);
      }
    })();
  }, [heroes]);

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
    if (page === 2) {
      if (worldContainer.current.children.length && worldId) {
        worldContainer.current.childNodes.forEach(child => child.classList.remove('selected'));
        worldContainer.current.childNodes[worldId - 1].classList.add('selected');
      }
    }
  }, [worldId, page])

  useEffect(() => {
    if (page === 3) {
      if (heroContainer.current.children.length && heroId) {
        heroContainer.current.childNodes.forEach(child => child.classList.remove('selected'));
        heroContainer.current.childNodes[heroId - 1].classList.add('selected');
      }
    }
  }, [heroId, page]);

  useEffect(() => {
    if (page === 1) {
      setPageTitle('Select Your Hero Name');
    } else if (page === 2) {
      setPageTitle('Select Your World');
    } else {
      setPageTitle('Select Your Hero');
    }
  }, [page])

  const handleSubmit = async e => {
    if (!worldId || !heroId || !name) {
      return dispatch({
        type: LOAD_ERRORS,
        errors: ['There is at least one field with missing value.']
      });
    }
    const data = await dispatch(createHero({ userId, worldId, name, heroId }));

    if (!data.errors) {
      clickHandler();
    }
  }

  const handleNext = () => {
    if ((page === 1 && !name) || (page === 2 && !worldId)) {
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
        <>
        <div>
          <label for="name">Hero Name</label>
          <input type="text" 
              value={name} 
              name="name"
              onChange={e => setName(e.target.value)} />
          </div>
        </>
      )}
      {page === 2 && (
        <div className="modal__page-container" ref={worldContainer}> 
          {worlds.length && worlds.map(world => (
            <div className="world" onClick={() => setWorldId(world.id)}>
              <div className="world__name">{world.name}</div>
            </div>
          ))}
        </div>
      )}
      {page === 3 && (
        <div className="modal__page-container" ref={heroContainer}> 
          {heroes && heroes.length && heroes.map(hero => (
            <div className="hero" onClick={() => setHeroId(hero.id)}>
              <img src={hero.image_url} alt={hero.id} />
              <p>{hero.name}</p>
            </div>
          ))}
          <button onClick={handleSubmit}>Create Hero</button>
        </div>
      )}
      <button hidden={page < 2} onClick={handleBack}>Back</button>
      <button hidden={page > 2} onClick={handleNext}>Next</button>
    </>
  );
}
 
export default HeroCreator;