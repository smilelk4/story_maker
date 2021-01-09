import React from 'react';
import moment from 'moment';

const Monster = ({...props}) => {
  const { id, name, strength, image, timesDefeated, createdAt } = props;

  return ( 
    <div className="monster">
      <div className="monster__info">
        <p className="mystory__title title">{name}</p>
        <p className="strength">Strength: {strength}</p>
        <p className="times-defeated">Times Defeated: {timesDefeated}</p>
        <p className="created-at">Battling Since: {moment(createdAt).format("MM-DD-YYYY")}</p>
      </div>
      <img src={image} 
             alt={id}/>
    </div>
  );
}
 
export default Monster;