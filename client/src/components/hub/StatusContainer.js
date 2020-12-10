import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroes } from '../../store/actions/heroAction';

const StatusContainer = () => {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activity);
  const heroes = useSelector(state => state.hero);
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const [ status, setStatus ] = useState(null);

  useEffect(() => {
    if (Object.keys(activities).length === heroes.length) {
      const statusData = {};
      heroes.forEach(hero => {
        statusData[hero.name] = activities[hero.id][month][date - 1];
      });
      setStatus(statusData)
    }
  }, [activities, heroes]);

  return (
    <div className="status__container">
      {status && Object.entries(status).map(s => (
        <div>
          <p>{s[0]}</p>
          <p>{s[1]} points</p>
        </div>
      ))}
    </div>
  );
}
 
export default StatusContainer;