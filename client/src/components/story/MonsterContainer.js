import React, { useEffect } from 'react'
import NewMonster from './NewMonster';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMonsters, editMonster, 
         deleteMonster } from '../../store/actions/monsterAction';
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

  const handleEdit = async inputtedInfo => {
    return await dispatch(editMonster(inputtedInfo));
  }

  const handleDelete = async inputtedInfo => {
    return await dispatch(deleteMonster(inputtedInfo));
  }

  return ( 
    <PageAnimationWrapper>
      <NewMonster />
      <div className="monster__container">
        {monsters.length ? (
          monsters.map(monster => <Monster  key={monster.id}
                                            editMonster={handleEdit}
                                            deleteMonster={handleDelete}
                                            {...monster}/>)) : (
            <p className="mystory__none-display">
              You haven't added any monsters yet.
            </p>
          )}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default MonsterContainer;