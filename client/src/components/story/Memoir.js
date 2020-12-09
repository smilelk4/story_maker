import React from 'react';
import DateFormatter from '../../utils/dateFormatter';

const Memoir = ({...props}) => {
  const { title, description, hoursFought, accomplishmentLevel, date } = props;

  return ( 
    <div className="memoir">
      <p className="memoir__title title">{title}</p>
      <p className="memoir__description">{description}</p>
      <p className="memoir__extra-info">
        <p className="memoir__hours">Hours Fought: {hoursFought}</p>
        <p className="memoir__accomplishment">Accomplishment Level: {accomplishmentLevel}</p>
        <p className="memoir__date">Date: {DateFormatter(date)}</p>
      </p>
    </div>
  );
}
 
export default Memoir;