import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import { baseUrl } from '../config';
import { clearActivitiesAction } from '../store/reducers/activityReducer';
import { clearTasksAction } from '../store/reducers/dailyTaskReducer';
import { clearDestinationsAction } from '../store/reducers/destinationReducer';
import { clearHeroesAction } from '../store/reducers/heroReducer';
import { clearMemoirsAction } from '../store/reducers/memoirReducer';
import { clearMonstersAction } from '../store/reducers/monsterReducer';
import { clearUserAction } from '../store/reducers/userReducer';
import { clearStoriesAction } from '../store/reducers/storyReducer';
import { clearProgressAction } from '../store/reducers/progressReducer';
import { clearTokenAction } from '../store/reducers/tokenReducer';
import { clearErrors } from '../store/reducers/errorReducer';

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
        const res = await fetch(`${baseUrl}/users/${user.id}/heroes`);
        const data = await res.json();
        heroes.push(...data.heroes);
      }

      const stories = [];
      if (heroes.length) {
        for (let hero of heroes) {
          const res = await fetch(`${baseUrl}/heroes/${hero.id}/stories`);
          const data = await res.json();
          stories.push(...data.stories);
        }
        setStories(stories);
      }
    })();
  }, [heroes])

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    dispatch(clearTokenAction());
    dispatch(clearUserAction());
    dispatch(clearStoriesAction());
    dispatch(clearProgressAction());
    dispatch(clearActivitiesAction());
    dispatch(clearTasksAction());
    dispatch(clearDestinationsAction());
    dispatch(clearErrors());
    dispatch(clearHeroesAction());
    dispatch(clearMemoirsAction());
    dispatch(clearMonstersAction());
    history.push('/');
  };

  return ( 
    <nav className="navbar__container">
      <NavBar handleLogout={handleLogout} user={user} stories={stories}/>
    </nav>
  );
}
 
export default NavBarContainer;