import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyHub from './hub/MyHub';
import MyStory from './story/MyStory';
import HeaderContainer from './HeaderContainer';
import Footer from './Footer';
import ProtectedRoute from './ProtectedRoute';

const RoutesContainer = () => {
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