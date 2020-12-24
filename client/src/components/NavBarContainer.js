import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';

const NavBarContainer = () => {
  const user = useSelector(state => state.user);
  const stories = useSelector(state => state.story);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    history.push('/');
  };

  return ( 
    <nav className="navbar__container">
      <NavBar handleLogout={handleLogout} user={user} stories={stories}/>
    </nav>
  );
}
 
export default NavBarContainer;