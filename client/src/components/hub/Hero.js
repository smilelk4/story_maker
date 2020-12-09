import React from 'react';

const Hero = (...props) => {
  const { id, name, level, hp, image } = props[0];
  return ( 
    <div className="hero">
      <div className="hero__avatar">
        <img src={image} alt={id} />
      </div>
      <p className="hero__stat">
          <span>{level}</span><span>{hp}</span>
      </p>
      {/* <p className="hero__hp">HP: {hp}</p> */}
      <p className="hero__name">{name}</p>
    </div>
  );
}
 
export default Hero;