import React from 'react';
import DateFormatter from '../../utils/dateFormatter';

const Monster = ({...props}) => {
  const { id, name, strength, createdAt } = props;

  return ( 
    <div className="monster">
      <p className="monster__title title">{name}</p>
      <p className="strength">{strength}</p>
      <p className="created-at">{createdAt}</p>
    </div>
  );
}
 
export default Monster;