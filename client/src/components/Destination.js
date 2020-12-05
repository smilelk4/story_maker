import React from 'react';

const Destination = ({...props}) => {
  console.log('PROPS', props)
  const { id, parent_destination_id: parentDestinationId,
        title, description, target_date: targetDate, importance } = props;
  return ( 
    <div className="destination">
      <p className="destination__title">{title}</p>
      <p className="destination__description">{description}</p>
      <p className="destination__target-date">{targetDate}</p>
    </div>
  );
}
 
export default Destination;