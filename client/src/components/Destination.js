import React, { useState, useEffect } from 'react';
import dateFormatter from '../utils/dateFormatter';
import Line from './svg/Line';

const Destination = ({handleClick, ...props}) => {
  const { id, parent_destination_id: parentDestinationId,
        title, description, target_date: targetDate, importance } = props;
  const [isOverdue, setIsOverDue] = useState(false);

  const today = new Date();
  const target = new Date(targetDate);
  const timeDiff = target.getTime() - today.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  useEffect(() => {
    if (dayDiff < 0) {
      setIsOverDue(true);
    } else {
      setIsOverDue(false);
    }
  }, [targetDate, dayDiff])

  return ( 
    <>
      <div className="destination">
        <p className="destination__title title">
        {!parentDestinationId && <img className="icon"
            src='/icons/crown.png' alt={id}/>}{title}</p>
        <p className="destination__description">{description}</p>
        <div className="destination__stats">
          <div className="destination__days">
            
            {isOverdue ? (
              <p className="destination__alert">Overdue</p>
            ) : (
              <p className="destination__days-left">{dayDiff} Days Left</p>
            )}
            <p className="destination__target-date">Target Date: {dateFormatter(targetDate)}</p>
            <p onClick={() => handleClick(id)} 
              className="destination__complete">Mark as Accomplished</p>
          </div>
        </div>
      </div>
      {parentDestinationId && <Line />}
    </>
  );
}
 
export default Destination;