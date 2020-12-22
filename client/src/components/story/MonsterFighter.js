import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMonsters, updateTimesDefeated } from '../../store/actions/monsterAction';
import { raiseXP, updateHp } from '../../store/actions/heroAction';

const MonsterFighter = ({clickHandler}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const heroContainer = useRef();
  const hero = useSelector(state => state.hero[0]);
  const monsters = useSelector(state => state.monster);
  const errors = useSelector(state => state.errors);

  const [page, setPage] = useState(1);
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
  },[monsters, id, dispatch]);

  useEffect(() => {
    if (monster) {
      const exp = Math.ceil((monster.strength * .01) / 2 * 100);
      setExp(exp);

      const hp = Math.ceil((monster.strength * .02) / 2 * 100);
      setHp(hp);
    }
  },[monster, dispatch]);

  useEffect(() => {
    if (page === 1) {
      setPageTitle('Wild Monster Appeared!');
    } else if (page === 2) {
      setPageTitle('You\'ve Won!');
    } else {
      setPageTitle('You Lost HP');
    }
  }, [page]);

  const handleDefeat = () => {
    dispatch(updateTimesDefeated(monster.id));
    dispatch(raiseXP(exp, hero.id));
    setPage(2);
  }
  const handleFlee = () => {
    dispatch(updateHp(hp * -1, hero.id));
    setPage(3);
  }
  
  return ( 
    <>
      <h2 className="modal__title title">{pageTitle}</h2>
      {page === 1 && monster && (
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