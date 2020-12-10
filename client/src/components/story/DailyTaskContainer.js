import React, { useEffect } from 'react'
import NewMemoir from './NewMemoir';
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

  return ( 
    <div className="memoir__container">
      <NewMemoir />
      {memoirs.map(memoir => <Memoir {...memoir} />)}
    </div>
  );
}
 
export default MemoirContainer;