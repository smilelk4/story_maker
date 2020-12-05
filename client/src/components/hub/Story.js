import React from 'react';

const Story = (...props) => {
  const { title, difficulty, World } = props[0];
  return ( 
    <div className="story">
      <p className="story__title">{title}</p>
      <div className={`story__label-${difficulty}`}></div>
      <p className={"story__world-name"}>World Name: {World.name}</p>
    </div>
  );
}
 
export default Story;