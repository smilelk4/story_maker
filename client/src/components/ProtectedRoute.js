import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({component, path}) => {
  const token = useSelector(state => state.token);

  if (token) {
    return (
      <Route path={path}>
        {component}
      </Route>
    )
  } else {
    return (
      <Redirect to='/' />
    )
  }
}
 
export default ProtectedRoute;