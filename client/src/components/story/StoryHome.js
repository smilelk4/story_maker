import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Line from '../svg/Line';

const StoryHome = ({hero, story, destinations}) => {
  const { name, level, hp, xp, image } = hero;
  const maxHP = 100;
  const maxXP = Math.floor(100 ** (level / 50) * 10);
  const [hpPercentage, setHPPercentage] = useState("100%");
  const [xpPercentage, setXPPercentage] = useState("100%");
  const memoir = useSelector(state => state.memoir);
  const [totalHoursFought, setTotalHoursFought] = useState(0);
  const [averageAccomplishmentLevel, setAverageAccomplishmentLevel] = useState(0);
  const currentMonth = moment().month() + 1;

  useEffect(() => {
    setHPPercentage(`${(hp / maxHP) * 100}%`);
    setXPPercentage(`${(xp / maxXP) * 100}%`);
  }, [hp, xp, maxHP, maxXP]);

  useEffect(() => {
    if (memoir.length) {
      const memoirsThisMonth = memoir.filter(m => moment(m.date).month() + 1 === currentMonth)
      const hoursThisMonth = memoirsThisMonth.reduce((acc, m) => acc + m.hoursFought, 0);
      const averageAccomplishmentLevelThisMonth = 
            (memoirsThisMonth.reduce((acc, m) => acc + m.accomplishmentLevel, 0)
            / memoirsThisMonth.length).toFixed(2);
      setTotalHoursFought(hoursThisMonth);
      setAverageAccomplishmentLevel(averageAccomplishmentLevelThisMonth);
    }
  }, [memoir, currentMonth]);

  const skullIcons = () => {
    const skulls = [];
    for (let i = 0; i < story.difficulty; i++) {
      skulls.push(<img src='/icons/skull.png' alt={story.id}/>)
    }
    return skulls;
  };

  return ( 
    <div className="storyhome">
      <div className='storyhome__section'>
        <div className="storyhome__story">
          <h4 className='storyhome__title title'>{story.title}</h4>
          <p className='storyhome__field'>
            <span>
              <span className="label storyhome__label">Difficulty: </span>
              <span className="storyhome__data storyhome__skulls">{skullIcons()}</span>
            </span>
          </p>
          <p className='storyhome__field'>
            <span>
              <span className="label storyhome__label">On adventure since: </span>
              <span className="storyhome__data">
                {moment(story.start_date).format("MMM Do YYYY") + ' '}
                ({moment(story.start_date).startOf('day').fromNow()})
              </span>
            </span>
          </p>
          <p className='storyhome__field'>
            <span>
              <span className="label storyhome__label">Expected completion date: </span> 
              <span className="storyhome__data">
                {moment(destinations[destinations.length - 1].target_date).format("MMM Do YYYY") + ' '}
                ({moment(destinations[destinations.length - 1].target_date).endOf('day').fromNow()})
              </span>
            </span>
          </p>
          <p className='storyhome__field'>
            <span>
              <span className="label storyhome__label">Final destination: </span>
              <span className="storyhome__data">{destinations[destinations.length - 1].title}</span>
            </span>
          </p>
        </div>
        <img src="https://story-maker-app.s3.amazonaws.com/tower.png" 
             alt={story.id}
             className="storyhome__castle"/>
      </div>
      <Line />
      <div className='storyhome__section'>
        <div className="storyhome__hero-container">
          <h4 className='storyhome__title title'>Hero on Duty</h4>
          <div className="storyhome__hero">
            <div className="storyhome__hero-image">
              <img src={image} alt={hero.id} />
            </div>
            <div className="storyhome__hero-info">
              <div className="storyhome__hero-name">{name}</div>
              <div className="storyhome__hero-level">Level: {level}</div>
              <div className="storyhome__hero-hp">
                <span className="status-bar">
                  <span style={{width: hpPercentage }}
                        className="hp-meter"></span>
                </span>
                <div className="storyhome__hero-hp">HP ({hero.hp} / {maxHP})</div>
              </div>
              <div className="storyhome__hero-xp">
                <span className="status-bar">
                  <span style={{width: xpPercentage }}
                        className="xp-meter"></span>
                </span>
                <div className="storyhome__hero-xp">XP ({hero.xp} / {maxXP})</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
      <div className='storyhome__section'>
        <div className="storyhome__calendar-container">
          <h4 className='storyhome__title title'>This Month</h4>

          <p className='storyhome__field'>
            <span>
              <span className="label storyhome__label">Total hours fought this month: </span>
              <span>
                {totalHoursFought} hours
              </span>
            </span>
          </p>
          <p className='storyhome__field'>
            <span>
              <span className="label storyhome__label">Average accomplishment level: </span>
              <span>
                {averageAccomplishmentLevel}
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default StoryHome;