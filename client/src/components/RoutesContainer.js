import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyHub from './hub/MyHub';
import MyStory from './story/MyStory';
import HeaderContainer from './HeaderContainer';
import Footer from './Footer';
import ProtectedRoute from './ProtectedRoute';

const RoutesContainer = ({user}) => {
  const token = useSelector(state => state.token);

  return (
  <>
    <HeaderContainer />
    <Switch>
      <ProtectedRoute component={<MyHub />} path='/my-hub'/>
      <ProtectedRoute component={<MyStory/>} path='/stories/:id'/>
      <Route to='*'>
        "Error"
      </Route>
    </Switch>
    <Footer />
  </>
  )
};

export default RoutesContainer;