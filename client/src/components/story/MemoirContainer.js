import React, { useEffect } from 'react'
import NewMemoir from './NewMemoir';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMemoirs } from '../../store/actions/memoirActions';

const MemoirContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMemoirs(id));
  },[id, dispatch]);

  return ( 
    <div className="memoir__container">
      <NewMemoir />
      MemoirContainer
    </div>
  );
}
 
export default MemoirContainer;