import React from 'react';

const Memoir = ({...props}) => {
  const { title, description, hoursFought, accomplishmentLevel } = props;

  return ( 
    <div className="memoir">
      <p className="destination__title">{title}</p>
      <p className="destination__description">{description}</p>
      <p className="destination__hours">{hoursFought}</p>
      <p className="destination__accomplishment">{accomplishmentLevel}</p>
    </div>
  );
}
 
export default Memoir;