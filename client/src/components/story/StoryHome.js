import React, { useEffect } from 'react'
import NewMemoir from './NewMemoir';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMemoirs } from '../../store/actions/memoirActions';
import Memoir from './Memoir';

const StoryHome = ({hero, story}) => {
  // useEffect(() => {
  //   dispatch(getMemoirs(id));
  // },[id, dispatch]);

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
            <img src={hero.image} alt={hero.id} />
          </div>
          <div className="storyhome__hero-info">
            <div className="storyhome__hero-name">{hero.name}</div>
            <div className="storyhome__hero-level">{hero.level}</div>
            <div className="storyhome__hero-hp">{hero.hp}</div>
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