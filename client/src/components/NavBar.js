import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({username, profileImage}) => {
  return ( 
    <nav className="navbar">
      <div className="navbar__logo title">
        <NavLink to='/'>Story Maker</NavLink>
      </div>
      <div className="navbar__menu">
        <NavLink to='/my-hub'>Hub</NavLink>
      </div>
    </nav>
  );
}
 
export default NavBar;