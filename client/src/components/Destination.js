import React from 'react';
import dateFormatter from '../utils/dateFormatter';

const Destination = ({...props}) => {
  const { id, parent_destination_id: parentDestinationId,
        title, description, target_date: targetDate, importance } = props;

  const today = new Date();
  const target = new Date(targetDate);
  const timeDiff = target.getTime() - today.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return ( 
    <div className="destination">
      <p className="destination__title title">{title}</p>
      <p className="destination__description">{description}</p>
      <p className="destination__days-left">{dayDiff > 0 ? `${dayDiff} Days Left`: 'Overdue'} </p>
      <p className="destination__target-date">Target Date: {dateFormatter(targetDate)}</p>
    </div>
  );
}
 
export default Destination;