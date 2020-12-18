import React, { useEffect } from 'react'
import NewMonster from './NewMonster';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMemoirs } from '../../store/actions/memoirActions';
import Memoir from './Memoir';

const MonsterContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const memoirs = useSelector(state => state.memoir);

  useEffect(() => {
  },[id, dispatch]);


  return ( 
    <PageAnimationWrapper>
      <NewMonster />
      <div className="monster__container">
      </div>
    </PageAnimationWrapper>
  );
}
 
export default MonsterContainer;