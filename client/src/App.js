import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Splash from './components/splash/Splash';
import MyHub from './components/hub/MyHub';
import Header from './components/Header';
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
      <Header />

      <Switch>
        <Route exact path='/'>
          <Splash />
        </Route>
        <Route path='/my-hub'>
          <MyHub />
        </Route>
        <Route to='*'>
          "Error"
        </Route>
      </Switch>
    </div>
  );
}

export default App;
