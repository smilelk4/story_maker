import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Splash from './components/splash/Splash';
import MyHub from './components/hub/MyHub';
import MyStory from './components/story/MyStory';
import HeaderContainer from './components/HeaderContainer';
import { getUser } from './store/actions/userAction';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (token && !user.id) {
      dispatch(getUser(token));
    }
  }, [token, user, dispatch]); 

  return (
    <div className="app">
      <HeaderContainer />

      <Switch>
        <Route exact path='/'>
          <Splash />
        </Route>
        <Route path='/my-hub'>
          <MyHub />
        </Route>
        <Route path='/stories/:id'>
          <MyStory />
        </Route>
        <Route to='*'>
          "Error"
        </Route>
      </Switch>
    </div>
  );
}

export default App;
