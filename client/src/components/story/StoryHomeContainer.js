import React, { useEffect } from 'react'
import NewMemoir from './NewMemoir';
import StoryHome from './StoryHome';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMemoirs } from '../../store/actions/memoirActions';
import Memoir from './Memoir';

const StoryHomeContainer = () => {
  const dispatch = useDispatch();
  const hero = useSelector(state => state.hero[0]);
  const story = useSelector(state => state.story[0]);

  // useEffect(() => {
  //   dispatch(getMemoirs(id));
  // },[id, dispatch]);

  return ( 
    <div className="storyhome__container">
      <StoryHome hero={hero} story={story}/>
      {/* {memoirs.map(memoir => <Memoir {...memoir} />)} */}
    </div>
  );
}
 
export default StoryHomeContainer;