import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import MyHub from './hub/MyHub';
import MyStory from './story/MyStory';
import HeaderContainer from './HeaderContainer';
import Footer from './Footer';
import ProtectedRoute from './ProtectedRoute';
import { clearDestinationsAction } from '../store/reducers/destinationReducer';

const RoutesContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(clearDestinationsAction());
  // }, [location]);

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