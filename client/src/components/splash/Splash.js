import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Splash = () => {
  return ( 
    <div className="splash">
      <div className="splash__container">
        <div className="splash__scroll">
        </div>
      </div>
      <LoginForm />
      <SignupForm />
    </div>
  );
}
 
export default Splash;