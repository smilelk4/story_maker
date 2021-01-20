import React from 'react';
import { Link } from 'react-router-dom';
import Shield from '../svg/Shield';

const Story = (...props) => {
  const { id, title, World } = props[0];
  return ( 
    <Link to={`/stories/${id}`}>
      <div className="story">
        <p className="story__title title">{title}</p>
        {World && <div className="story__world-name">
          <Shield />
          <div className="story__">
            <p>World Name:</p><br /> 
            <p>{World.name}</p>
          </div>
        </div>}
      </div>
    </Link>
  );
}
 
export default Story;