import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemoirs } from '../../store/actions/memoirActions';
import Activity from './Activity';

const ActivityContainer = () => {
  const dispatch = useDispatch();
  const stories = useSelector(state => state.story);

  useEffect(() => {
    if (stories.length) {
      for (let story of stories) {
        dispatch(getMemoirs(story.id));
      }
    }
  }, [stories]);

  return ( 
    <div className="activity__container">
        <Activity />
    </div>
  );
}
 
export default ActivityContainer;