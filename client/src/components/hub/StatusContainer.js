import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroes } from '../../store/actions/heroAction';
import Scroll2 from '../svg/Scroll2';

const StatusContainer = () => {
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
      setStatus(statusData);
    }

  }, [activities, heroes]);

  return (
    <div className="status__container">
      <p className="status__title title">Today's activities</p>
      {status && Object.entries(status).map(s => (
        <div className="status__field">
          <p>{s[0]}</p>
          {s[1] === 10 ? <p className='alert'>{s[1]} actions</p> 
                       : <p>{s[1]} actions</p>}
        </div>
      ))}
    </div>
  );
}
 
export default StatusContainer;