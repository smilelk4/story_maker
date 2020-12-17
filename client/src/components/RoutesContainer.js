import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyHub from './hub/MyHub';
import MyStory from './story/MyStory';
import HeaderContainer from './HeaderContainer';
import Footer from './Footer';


const RoutesContainer = ({user}) => {
  const token = useSelector(state => state.token);

  return (
  <>
    <HeaderContainer />
    <Switch>
      <Route path='/my-hub'>
        {user && !token && <Redirect to='/' />}
        <MyHub />
      </Route>
      <Route path='/stories/:id'>
        {user && !token && <Redirect to='/' />}
        <MyStory/>
      </Route>
      <Route to='*'>
        "Error"
      </Route>
    </Switch>
    <Footer />
  </>
  )
};

export default RoutesContainer;