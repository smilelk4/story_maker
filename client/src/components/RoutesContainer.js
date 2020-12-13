import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import MyHub from './hub/MyHub';
import MyStory from './story/MyStory';
import HeaderContainer from './HeaderContainer';
import Footer from './Footer';

const RoutesContainer = ({user, ...props}) => {
  return (
  <>
    <HeaderContainer />
    <Switch>
      <Route path='/my-hub'>
        {user ? <MyHub {...props}/> : <Redirect to='/' />}
        <MyHub {...props}/>
      </Route>
      <Route path='/stories/:id'>
        {user ? <MyStory {...props}/> : <Redirect to='/' />}
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