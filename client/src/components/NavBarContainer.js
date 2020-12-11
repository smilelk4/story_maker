import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';

const NavBarContainer = () => {
  const user = useSelector(state => state.user);

  return ( 
    <nav className="navbar__container">
      <NavBar {...user}/>
    </nav>
  );
}
 
export default NavBarContainer;