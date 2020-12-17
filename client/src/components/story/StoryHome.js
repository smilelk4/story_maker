import React, { useEffect, useState } from 'react'
import moment from 'moment';

const StoryHome = ({hero, story, destinations}) => {
  const { name, level, hp, xp, image } = hero;
  const maxHP = 100;
  const maxXP = Math.floor(100 ** (level / 50) * 10);
  const [hpPercentage, setHPPercentage] = useState("100%");
  const [xpPercentage, setXPPercentage] = useState("100%");

  useEffect(() => {
    setHPPercentage(`${(hp / maxHP) * 100}%`);
    setXPPercentage(`${(xp / maxXP) * 100}%`);
  }, [hp, xp, maxHP, maxXP]);

  console.log('----------')
  if (destinations) {
    console.log(moment(destinations[destinations.length - 1].target_date))
  }
  console.log('----------')

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
            <span>Difficulty: <span>{skullIcons()}</span></span>
          </p>
          <p className='storyhome__field'>
            <span>On adventure since: 
              <span>{moment(story.start_date).format("MMM Do YYYY")}
                    ({moment(story.start_date).startOf('day').fromNow()})</span>
            </span>
          </p>
          <p className='storyhome__field'>
            <span>Expected completion date: 
              <span>{moment(destinations[destinations.length - 1].target_date).format("MMM Do YYYY")}
                    ({moment(destinations[destinations.length - 1].target_date).endOf('day').fromNow()})</span>
            </span>
          </p>
          <p className='storyhome__field'>
            <span>Final destination: 
              <span>{destinations[destinations.length - 1].title}</span>
            </span>
          </p>
        </div>
        <img src="https://story-maker-app.s3.amazonaws.com/tower.png" 
             alt={story.id}/>
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