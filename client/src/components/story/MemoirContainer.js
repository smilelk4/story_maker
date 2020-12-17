import React, { useEffect } from 'react'
import NewMemoir from './NewMemoir';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMemoirs } from '../../store/actions/memoirActions';
import Memoir from './Memoir';

const MemoirContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const memoirs = useSelector(state => state.memoir);

  useEffect(() => {
    dispatch(getMemoirs(id));
  },[id, dispatch]);

  const pageVariants = {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  }

  return ( 
    <PageAnimationWrapper>
      <div className="memoir__container">
        <NewMemoir />
        {memoirs.map(memoir => <Memoir {...memoir} />)}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default MemoirContainer;