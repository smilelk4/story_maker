import React, { useState, useEffect } from 'react';
import dateFormatter from '../utils/dateFormatter';

const Destination = ({...props}) => {
  const { id, parent_destination_id: parentDestinationId,
        title, description, target_date: targetDate, importance } = props;
  const [isOverdue, setIsOverDue] = useState(false);

  const today = new Date();
  const target = new Date(targetDate);
  const timeDiff = target.getTime() - today.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  useEffect(() => {
    (dayDiff < 0) && setIsOverDue(true);
  }, [targetDate, dayDiff])

  return ( 
    <div className="destination">
      <p className="destination__title title">{title}</p>
      <p className="destination__description">{description}</p>
      {isOverdue ? (
        <>
          <p className="destination__alert">Overdue</p>
          <p className="destination__target-date alert">Target Date: {dateFormatter(targetDate)}</p>
        </>
      ) : (
        <>
          <p className="destination__days-left">{dayDiff} Days Left</p>
          <p className="destination__target-date">Target Date: {dateFormatter(targetDate)}</p>
        </>
      )}
    </div>
  );
}
 
export default Destination;