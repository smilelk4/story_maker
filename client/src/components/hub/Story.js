import React from 'react';

const Story = (...props) => {
  const { title, label, World } = props[0];
  return ( 
    <div className="story">
      <p className="story__title">{title}</p>
      <div className={`story__label-${label}`}></div>
      <p className={"story__world-name"}>World Name: {World.name}</p>
    </div>
  );
}
 
export default Story;