import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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
    <div className="status__field">
      <span className="status__title title">Today's activities</span>
    </div>
      {status && Object.entries(status).map(s => (
        <div className="status__field">
          <p>{s[0]}</p>
          {s[1] === 10 && <p className='alert'>{s[1]} actions</p>}
          {s[1] === 0 && <p>{s[1]} action</p>}
          {s[1] !== 0 && s[1] !== 10 && <p>{s[1]} actions</p>}
        </div>
      ))}
    </div>
  );
}
 
export default StatusContainer;