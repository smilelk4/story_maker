import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../config';
import { loadErrors } from '../../store/reducers/errorReducer';
import { editHero } from '../../store/actions/heroAction';

const HeroCreator = ({setIsModalOpen, editingHeroName, editingHeroId: id}) => {
  const dispatch = useDispatch();
  const worldContainer = useRef();
  const heroContainer = useRef();
  const userId = useSelector(state => state.user.id);
  const errors = useSelector(state => state.errors);

  const [page, setPage] = useState(1);
  const [heroes, setHeroes] = useState([]);
  const [worlds, setWorlds] = useState([]);
  const [worldId, setWorldId] = useState(null);
  const [heroId, setHeroId] = useState(null);
  const [name, setName] = useState(editingHeroName);
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    (async () => {
      if (heroes && !heroes.length) {
        const res = await fetch(`${baseUrl}/heroes`, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        });
        const data = await res.json();
        setHeroes(data.heroImages);
      }
    })();
  }, [heroes]);

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
    if (page === 1) {
      setPageTitle('Select Your Hero Name!');
    } else if (page === 2) {
      setPageTitle('Select Your World');
    } else {
      setPageTitle('Select Your Hero');
    }
  }, [page])

  const handleSubmit = async e => {
    if (!worldId || !heroId || !name) {
      return dispatch(loadErrors(['There is at least one field with missing value.']));
    }
    const data = await dispatch(editHero({ id, userId, worldId, name, heroId }));

    if (!data.errors) {
      setIsModalOpen(false);
    }
  }

  const handleNext = () => {
    if ((page === 1 && !name) || (page === 2 && !worldId)) {
      return dispatch(loadErrors(['Please select to proceed.']));
    }
    setPage(page + 1);
  }
  
  const handleBack = () => {
    setPage(page - 1);
  }

  return ( 
    <>
      <h2 className="title">{pageTitle}</h2>
      {page === 1 && (
        <>
        <div className="modal__field">
          <label htmlFor="name">Hero Name</label>
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
            <div className="world" onClick={e => {
              setWorldId(world.id);
              worldContainer.current.childNodes.forEach(child => {
                child.childNodes[0].classList.remove('modal__content--selected');
              });
              e.target.classList.add('modal__content--selected');
              }}>
              <div className="world__name">{world.name}</div>
            </div>
          ))}
        </div>
      )}
      {page === 3 && (
        <>
        <div className="modal__page-container" ref={heroContainer}> 
          {heroes && heroes.length && heroes.map(hero => (
            <div className="hero" onClick={e => {
              setHeroId(hero.id);
              heroContainer.current.childNodes.forEach(child => {
                child.classList.remove('modal__content--selected');
              });
              e.target.classList.add('modal__content--selected');
              }}>
              <img src={hero.image_url} alt={hero.id} />
              <p>{hero.name}</p>
            </div>
          ))}
        </div>
        <button onClick={handleSubmit}>Edit Hero</button>
        </>
      )}
      <div className="modal__errors-container">
        {errors.map(error => (
          <div key={error.message}>{error}</div>
        ))}
      </div>
      <div className="modal__button-container">
        <button disabled={page < 2} onClick={handleBack}>Back</button>
        <button disabled={page > 2} onClick={handleNext}>Next</button>
      </div>
    </>
  );
}
 
export default HeroCreator;