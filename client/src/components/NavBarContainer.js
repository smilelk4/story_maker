import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import { baseUrl } from '../config';
import { updateProfileImage, updatePassword } from '../store/actions/userAction';
import { destroySessionAction } from '../store/reducers/rootReducer';

const NavBarContainer = () => {
  const [ stories, setStories ] = useState([]);
  const user = useSelector(state => state.user);
  const heroes = useSelector(state => state.hero);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const heroes = [];
      if (user.id) {
        const res = await fetch(`${baseUrl}/users/${user.id}/heroes`, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        });
        const data = await res.json();
        heroes.push(...data.heroes);
      }

      const stories = [];
      if (heroes.length) {
        for (let hero of heroes) {
          const res = await fetch(`${baseUrl}/heroes/${hero.id}/stories`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          });
          const data = await res.json();
          stories.push(...data.stories);
        }
        setStories(stories);
      }
    })();
  }, [heroes, user.id])

  const changeProfImage = imageData => {
    const data = new FormData();
    data.append('file', imageData);
    dispatch(updateProfileImage(user.id, data));
  }

  const changePassword = (password, confirmPassword) => {
    dispatch(updatePassword(user.id, {password, confirmPassword}));
  }

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    dispatch(destroySessionAction());
    history.push('/');
  };

  return ( 
    <nav className="navbar__container">
      <NavBar handleProfImageChange={changeProfImage} 
              handlePasswordChange={changePassword}
              handleLogout={handleLogout} 
              user={user} 
              stories={stories}
              />
    </nav>
  );
}
 
export default NavBarContainer;