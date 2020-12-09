import React from 'react';
import { Link } from 'react-router-dom';

const Story = (...props) => {
  const { id, title, difficulty, World } = props[0];
  return ( 
    <Link to={`/stories/${id}`}>
      <div className="story">
        <p className="story__title">{title}</p>
        <div className={`story__label-${difficulty}`}></div>
        <p className={"story__world-name"}>World Name: {World.name}</p>
      </div>
    </Link>
  );
}
 
export default Story;