import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputField from '../InputField';
import { validateUser } from '../../store/actions/userAction';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('demo_user@demo.com');
  const [password, setPassword] = useState('Password123!');

  const handleLogin = async e => {
    e.preventDefault();
    const data = await dispatch(validateUser({ email, password }));
    
    if(data && !data.errors) {
      window.location.href = '/my-hub';
    }
  };

  return ( 
    <div className="splash__form">
      <h4 className="title">Login</h4>
      <form onSubmit={handleLogin}>
        <InputField 
          type="text" 
          placeholder="Email"
          currentState={email}
          updateState={setEmail}
        />
        <InputField 
          type="password" 
          placeholder="Password"
          currentState={password}
          updateState={setPassword}
        />
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
}
 
export default LoginForm;