import React from 'react';
import DateFormatter from '../../utils/dateFormatter';

const Monster = ({...props}) => {
  const { id, name, strength, image, timesDefeated, createdAt } = props;

  return ( 
    <div className="monster">
      <p className="monster__title title">{name}</p>
      <p className="strength">{strength}</p>
      <p className="times-defeated">{timesDefeated}</p>
      <p className="created-at">{createdAt}</p>
      <img src={image} 
             alt={id}/>
    </div>
  );
}
 
export default Monster;