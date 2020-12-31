import React from 'react';
import { Link } from 'react-router-dom';
import Shield from '../svg/Shield';

const Story = (...props) => {
  const { id, title, World } = props[0];
  return ( 
    <Link to={`/stories/${id}`}>
      <div className="story">
        <p className="story__title title">{title}</p>
        {World && <p className="story__world-name">
          <Shield />
          <div>
            <p>World Name:</p><br /> 
            <p>{World.name}</p>
          </div>
        </p>}
      </div>
    </Link>
  );
}
 
export default Story;