import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemoirs } from '../../store/actions/memoirActions';
import Activity from './Activity';

const ActivityContainer = () => {
  const dispatch = useDispatch();
  const stories = useSelector(state => state.story);
  const memoirs = useSelector(state => state.memoir);

  useEffect(() => {
    if (stories.length) {
      for (let story of stories) {
        dispatch(getMemoirs(story.id));
      }
    }
  }, [stories, dispatch]);

  return ( 
    <div className="activity__container">
        <Activity memoirs={memoirs}/>
    </div>
  );
}
 
export default ActivityContainer;