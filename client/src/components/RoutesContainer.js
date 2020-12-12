import { Switch, Route } from 'react-router-dom';
import MyHub from './hub/MyHub';
import MyStory from './story/MyStory';
import HeaderContainer from './HeaderContainer';
import Footer from './Footer';

const RoutesContainer = ({...props}) => {
  return (
  <>
    <HeaderContainer />
    <Switch>
      <Route path='/my-hub'>
        <MyHub {...props}/>
      </Route>
      <Route path='/stories/:id'>
        <MyStory {...props}/>
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