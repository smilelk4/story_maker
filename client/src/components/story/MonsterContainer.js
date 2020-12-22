import React, { useEffect } from 'react'
import NewMonster from './NewMonster';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMonsters } from '../../store/actions/monsterAction';
import Monster from './Monster';

const MonsterContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const monsters = useSelector(state => state.monster);

  useEffect(() => {
    if (!monsters.length) {
      dispatch(getMonsters(id));
    }
  },[id, dispatch]);


  return ( 
    <PageAnimationWrapper>
      <NewMonster />
      <div className="monster__container">
        {monsters.map(monster => <Monster {...monster} />)}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default MonsterContainer;