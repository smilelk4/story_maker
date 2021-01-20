import React, { useEffect } from 'react'
import NewMonster from './NewMonster';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMonsters } from '../../store/actions/monsterAction';
import { clearMonstersAction } from '../../store/reducers/monsterReducer';
import Monster from './Monster';

const MonsterContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const monsters = useSelector(state => state.monster);

  useEffect(() => {
    dispatch(clearMonstersAction());
    dispatch(getMonsters(id));
  },[id, dispatch]);

  return ( 
    <PageAnimationWrapper>
      <NewMonster />
      <div className="monster__container">
        {monsters.length ? (
          monsters.map(monster => <Monster {...monster} key={monster.id}/>)) : (
            <p className="mystory__none-display">
              You haven't added any monsters yet.
            </p>
          )}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default MonsterContainer;