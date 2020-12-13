import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import MyHub from './hub/MyHub';
import MyStory from './story/MyStory';
import HeaderContainer from './HeaderContainer';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const RoutesContainer = ({user, ...props}) => {
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
        {<MyStory {...props}/>}
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