import React, { useState, useEffect } from 'react';

const Hero = (...props) => {
  const { id, name, level, hp, xp, image } = props[0];
  const maxHP = 100;
  const maxXP = Math.floor(100 ** (level / 50) * 10);
  const [hpPercentage, setHPPercentage] = useState("100%");
  const [xpPercentage, setXPPercentage] = useState("100%");

  useEffect(() => {
    setHPPercentage(`${(hp / maxHP) * 100}%`);
    setXPPercentage(`${(xp / maxXP) * 100}%`);
  }, [hp, xp, maxHP, maxXP]);

  return ( 
    <div className="hero">
      <div className="hero__avatar">
        <img src={image} alt={id} />
      </div>
      <div className="hero__stat">
          <span className="hero__level">{level}</span>
          <p className="hero__status-bars-container">
            <span className="status-bar">
              <span 
                style={{width: hpPercentage }}
                className="hp-meter"></span>
            </span>
            <span className="status-bar">
              <span 
              style={{width: xpPercentage }}
              className="xp-meter"></span>
            </span>
          </p>
      </div>
      <p className="hero__name">{name}</p>
    </div>
  );
}
 
export default Hero;