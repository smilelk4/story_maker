import React from 'react';
import LoginForm from './LoginForm';

const Splash = () => {
  return ( 
    <div className="splash">
      <div className="splash__container">
        <div className="splash__scroll">
        </div>
      </div>
      <LoginForm />
    </div>
  );
}
 
export default Splash;