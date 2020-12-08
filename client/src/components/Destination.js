import React from 'react';
import dateFormatter from '../utils/dateFormatter';

const Destination = ({...props}) => {
  const { id, parent_destination_id: parentDestinationId,
        title, description, target_date: targetDate, importance } = props;
  return ( 
    <div className="destination">
      <p className="destination__title title">{title}</p>
      <p className="destination__description">{description}</p>
      <p className="destination__days-left">__ Days Left</p>
      <p className="destination__target-date">Target Date: {dateFormatter(targetDate)}</p>
    </div>
  );
}
 
export default Destination;