import React, { useState, useEffect } from 'react';

const PastDestination = ({...props}) => {
  const { id, parent_destination_id: parentDestinationId,
      title, description, target_date: targetDate, importance } = props;


  return ( 
    <div className="past-destination">
       <p className="past-destination__title title">
         {title}
       </p>
    </div>
  );
}
 
export default PastDestination;