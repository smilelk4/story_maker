import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { baseUrl } from '../../config';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../../store/reducers/errorReducer';
import { createStory } from '../../store/actions/storyAction';
import { getMonsters } from '../../store/actions/monsterAction';
import dateFormatter from '../../utils/dateFormatter';

const MonsterFighter = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const heroContainer = useRef();
  const heroes = useSelector(state => state.hero);
  const monsters = useSelector(state => state.monster);
  const errors = useSelector(state => state.errors);

  const [page, setPage] = useState(1);
  const [worlds, setWorlds] = useState([]);
  const [worldId, setWorldId] = useState(null);
  const [monsterId, setMonsterId] = useState(null);
  const [title, setTitle] = useState('');
  const [destinationTitle, setDestinationTitle] = useState('');
  const [targetDate, setTargetDate] = useState(dateFormatter(new Date()));
  const [importance, setImportance] = useState('0');
  const [pageTitle, setPageTitle] = useState('');

  const [monster, setMonster] = useState(monsters[0]);
  const [exp, setExp] = useState(0);

  useEffect(() => {
    dispatch(getMonsters(id));
  },[id, dispatch]);

  useEffect(() => {
    if (monsters.length) {
      const randomIndex = Math.floor(Math.random() * monsters.length);
      setMonster(monsters[randomIndex]);
    }
  },[id, dispatch]);

  useEffect(() => {
    if (monster) {
      const exp = monster.strength * .2;
      setExp(exp);
    }
  },[monster, dispatch]);

  useEffect(() => {
    if (page === 2) {
      if (heroContainer.current.children.length && monsterId) {
        heroContainer.current.childNodes.forEach(child => child.classList.remove('selected'));
        // heroContainer.current.childNodes[monsterId - 1].classList.add('selected');
      }
    }
  }, [monsterId, page]);

  useEffect(() => {
    if (page === 1) {
      setPageTitle('Wild Monster Appeared!');
    } else if (page === 2) {
      setPageTitle('Select Your Hero');
    } else {
      setPageTitle('Set Your Destination');
    }
  }, [page])

  const handleSubmit = async e => {
    if ( !monsterId || !title || !destinationTitle || !targetDate || !importance) {
      return dispatch({
        type: LOAD_ERRORS,
        errors: ['There is at least one field with missing value.']
      });
    }
    const data = await dispatch(createStory({ worldId, monsterId, title, 
                                destinationTitle, targetDate, importance  }));

    if(!data.errors) {
      history.push(`/stories/${data.stories[data.stories.length - 1].id}`);
    }
  }

  const handleNext = () => {
    if ((page === 1 && !title) || (page === 2 && !monsterId)) {
      return dispatch({
        type: LOAD_ERRORS,
        errors: ['Please select/fill out to proceed.']
      });
    }
    dispatch({ type: CLEAR_ERRORS });
    setPage(page + 1);
  }

  const handleDefeat = () => {
    setPage(2);
  }

  const handleFlee = () => {
    setPage(3);
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
            <img src={monster.image} alt={monster.id} />
            <p className="monster__name">{monster.name}</p>
          </div>
          <div>
            <button onClick={handleDefeat}>Defeat</button>
            <button onClick={handleFlee}>Flee</button>
          </div>
        </>
      )}
      {page === 2 && (
        <div className="modal__page-container" ref={heroContainer}> 
          <p>Gained EXP: {exp}</p>
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
 
export default MonsterFighter;