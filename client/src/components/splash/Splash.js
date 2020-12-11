import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Splash = () => {
  const [form, setForm] = useState(<SignupForm />);

  const changeForm = (component) => {
    setForm(component);
  };

  return ( 
    <div className="splash">
      <div className="splash__container">
        <div className="splash__scroll">
          <p className="splash__toggle-tag">
            <span onClick={() => changeForm(<SignupForm />)}>Sign Up</span>
            <span onClick={() => changeForm(<LoginForm />)}>Log In</span>
          </p>
          {form}
        </div>
      </div>
    </div>
  );
}
 
export default Splash;