import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { baseUrl } from '../../config';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../../store/reducers/errorReducer';
import { createStory } from '../../store/actions/storyAction';
import { getMonsters } from '../../store/actions/monsterAction';
import dateFormatter from '../../utils/dateFormatter';

const MonsterFighter = ({clickHandler}) => {
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
  const [hp, setHp] = useState(0);

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
      const exp = Math.ceil((monster.strength * .01) / 2 * 100);
      setExp(exp);

      const hp = Math.ceil((monster.strength * .02) / 2 * 100);
      setHp(hp);
    }
  },[monster, dispatch]);

  useEffect(() => {
    if (page === 2) {
      if (heroContainer.current.children.length && monsterId) {
        heroContainer.current.childNodes.forEach(child => child.classList.remove('selected'));
      }
    }
  }, [monsterId, page]);

  useEffect(() => {
    if (page === 1) {
      setPageTitle('Wild Monster Appeared!');
    } else if (page === 2) {
      setPageTitle('You\'ve Won!');
    } else {
      setPageTitle('You Lost HP');
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

  const handleDefeat = () => {
    setPage(2);
  }
  const handleFlee = () => {
    setPage(3);
  }
  
  return ( 
    <>
      <h2 className="modal__title title">{pageTitle}</h2>
      {page === 1 && (
        <>
          <div className="modal__field">
            <img src={monster.image} alt={monster.id} />
            <p className="monster__name">{monster.name}</p>
            <p className="monster__strength">Strength: {monster.strength}</p>
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
          <button onClick={clickHandler}>Close</button>
        </div>
      )}
      {page === 3 && (
        <div className="modal__page-container" ref={heroContainer}> 
          <p>Lost HP: {hp}</p>
          <button onClick={clickHandler}>Close</button>
        </div>
      )}
      <div className="modal__errors-container">
        {errors.map(error => (
          <div>{error}</div>
        ))}
      </div>
    </>
  );
}
 
export default MonsterFighter;