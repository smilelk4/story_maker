import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';

const NavBarContainer = () => {
  const user = useSelector(state => state.user);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    history.push('/');
  };

  return ( 
    <nav className="navbar__container">
      <NavBar handleLogout={handleLogout} {...user}/>
    </nav>
  );
}
 
export default NavBarContainer;