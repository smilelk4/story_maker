import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import { baseUrl } from '../config';

const NavBarContainer = () => {
  const [ stories, setStories ] = useState([]);
  const user = useSelector(state => state.user);
  const heroes = useSelector(state => state.hero);
  // const stories = useSelector(state => state.story);
  const history = useHistory();

  useEffect(() => {
    // debugger
    (async () => {
      const heroes = [];
      if (user.id) {
        const res = await fetch(`${baseUrl}/users/${user.id}/heroes`);
        const data = await res.json();
        heroes.push(...data.heroes);
      }

      const stories = [];
      if (heroes.length) {
        for (let hero of heroes) {
          const res = await fetch(`${baseUrl}/heroes/${hero.id}/stories`);
          const data = await res.json();
          debugger
          stories.push(...data.stories);
        }
        setStories(stories);
      }
    })();
  }, [heroes])

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