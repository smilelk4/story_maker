import { useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import PageAnimationWrapper from './components/PageAnimationWrapper';
import Splash from './components/splash/Splash';
import RoutesContainer from './components/RoutesContainer';
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
  }, [token, user, dispatch, history]); 

  return (
    <div className="app">
      <AnimatePresence>
        <PageAnimationWrapper>
          <Switch>
            <Route exact path='/'>
              {token ? (
                <Redirect to='/my-hub' />
              ) : (
                <Splash />
              )}
            </Route>
            <Route to='*'>
                <RoutesContainer user={user.id} />
            </Route>
          </Switch>
        </PageAnimationWrapper>
      </AnimatePresence>
    </div>
  );
}

export default App;
