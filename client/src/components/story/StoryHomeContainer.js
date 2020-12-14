import React, { useEffect } from 'react'
import NewMemoir from './NewMemoir';
import StoryHome from './StoryHome';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMemoirs } from '../../store/actions/memoirActions';
import Memoir from './Memoir';

const StoryHomeContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  // useEffect(() => {
  //   dispatch(getMemoirs(id));
  // },[id, dispatch]);

  return ( 
    <div className="memoir__container">
      <StoryHome />
      {/* {memoirs.map(memoir => <Memoir {...memoir} />)} */}
    </div>
  );
}
 
export default StoryHomeContainer;