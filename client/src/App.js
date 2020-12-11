import { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Splash from './components/splash/Splash';
import MyHub from './components/hub/MyHub';
import MyStory from './components/story/MyStory';
import RoutesContainer from './components/RoutesContainer';
import Footer from './components/Footer';
import HeaderContainer from './components/HeaderContainer';
import { getUser } from './store/actions/userAction';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const user = useSelector(state => state.user);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      if (token && !user.id) {
        const data = await dispatch(getUser(token));
        if (data.errors || data.stack) {
          history.push('/');
          localStorage.removeItem('token');
          localStorage.removeItem('user_id');
        }
    }})()
  }, [token, user, dispatch]); 

  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Splash />
        </Route>
        <Route to='*'>
          <RoutesContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
