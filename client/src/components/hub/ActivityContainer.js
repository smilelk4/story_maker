import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from '../../store/actions/activityAction';
import Activity from './Activity';

const ActivityContainer = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(state => state.hero);
  const activities = useSelector(state => state.activity);

  useEffect(() => {
    if (heroes.length) {
      for (let hero of heroes) {
        dispatch(getActivities(hero.id));
      }
    }
  }, [heroes, dispatch]);

  return ( 
    <div className="activity__container">
        <Activity activities={activities}/>
    </div>
  );
}
 
export default ActivityContainer;