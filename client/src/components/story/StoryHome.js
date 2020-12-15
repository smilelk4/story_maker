import React, { useEffect, useState } from 'react'
import NewMemoir from './NewMemoir';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMemoirs } from '../../store/actions/memoirActions';
import Memoir from './Memoir';

const StoryHome = ({hero, story}) => {
  const { name, level, hp, xp, image } = hero;
  const maxHP = 100;
  const maxXP = Math.floor(100 ** (level / 50) * 10);
  const [hpPercentage, setHPPercentage] = useState("100%");
  const [xpPercentage, setXPPercentage] = useState("100%");

  useEffect(() => {
    setHPPercentage(`${(hp / maxHP) * 100}%`);
    setXPPercentage(`${(xp / maxXP) * 100}%`);
  }, [hp, xp, maxHP, maxXP]);

  return ( 
    <div className="storyhome">
      <div className='storyhome__section'>
        <div className="storyhome__story">
          <h4>{story.title}</h4>
          <p>Difficulty: {story.difficulty}</p>
        </div>
      </div>
      <div className='storyhome__section'>
        <div className="storyhome__hero-container">
          <div className="storyhome__hero-image">
            <img src={image} alt={hero.id} />
          </div>
          <div className="storyhome__hero-info">
            <div className="storyhome__hero-name">{name}</div>
            <div className="storyhome__hero-level">{level}</div>
            <div className="storyhome__hero-hp">
            <span className="status-bar">
              <span 
                style={{width: hpPercentage }}
                className="hp-meter"></span>
            </span>
            <span className="status-bar">
              <span 
              style={{width: xpPercentage }}
              className="xp-meter"></span>
            </span>
            </div>
            <div className="storyhome__hero-xp">{hero.xp}</div>
          </div>
          <div className="storyhome__hero-stats">
            Stats Here
          </div>
        </div>
      </div>
      {/* {heroes.map(memoir => <Memoir {...memoir} />)} */}
    </div>
  );
}
 
export default StoryHome;