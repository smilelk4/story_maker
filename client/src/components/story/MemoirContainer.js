import React, { useEffect } from 'react'
import NewMemoir from './NewMemoir';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMemoirs } from '../../store/actions/memoirActions';
import { clearMemoirsAction } from '../../store/reducers/memoirReducer';
import Memoir from './Memoir';

const MemoirContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const memoirs = useSelector(state => state.memoir);

  useEffect(() => {
    dispatch(clearMemoirsAction());
    dispatch(getMemoirs(id));
  },[id, dispatch]);

  return ( 
    <PageAnimationWrapper>
      <NewMemoir />
      <div className="memoir__container">
        {memoirs.map(memoir => <Memoir {...memoir} />)}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default MemoirContainer;