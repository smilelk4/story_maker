import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({username, profileImage}) => {
  const time = new Date().getHours();
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
      if (time < 12) {
        setGreeting('Good morning');
      } else if (time < 18) {
        setGreeting('Good afternoon');
      } else {
        setGreeting('Good evening');
      }
  }, [username, time])

  return ( 
    <nav className="navbar">
      <div className="navbar__logo title">
        <NavLink to='/'>Story Maker</NavLink>
      </div>
      <div>
        <span>{greeting}, {username}</span>
      </div>
      <div className="navbar__menu">
        <NavLink to='/my-hub'>Hub</NavLink>
      </div>
    </nav>
  );
}
 
export default NavBar;