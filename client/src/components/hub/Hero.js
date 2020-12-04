import React from 'react';

const Hero = (...props) => {
  const { id, name, level, hp, image } = props[0];
  return ( 
    <div className="hero">
      <div className="hero__avatar">
        <img src={image} alt={id} />
      </div>
      <p className="hero__name">{name}</p>
      <p className="hero__level">LV: {level}</p>
      <p className="hero__hp">HP: {hp}</p>
    </div>
  );
}
 
export default Hero;