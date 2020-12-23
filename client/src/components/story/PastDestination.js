import React from 'react';
import moment from 'moment';

const PastDestination = ({...props}) => {
  const { id, parent_destination_id: parentDestinationId, updatedAt,
      title, target_date: targetDate, importance, ParentDestination } = props;


  return ( 
    <div className="past-destination">
       <p className="past-destination__title title">
         {title}
       </p>
       <div className="past-destination__info">
        <p className="past-destination__parent-destination">
          Parent Destination: {ParentDestination && ParentDestination.title}
        </p>
        <p className="past-destination__target-date">
          Target Date: {moment(targetDate).format('MM-DD-YYYY')}
        </p>
        <p className="past-destination__accomplished-date">
          Accomplished on: {moment(updatedAt).format('MM-DD-YYYY')}
        </p>
       </div>
    </div>
  );
}
 
export default PastDestination;