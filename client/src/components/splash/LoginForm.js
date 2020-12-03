import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputField from '../InputField';
import { validateUser } from '../../store/actions/userAction';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    dispatch(validateUser({ email, password }));
  };

  return ( 
    <>
      <h4>Login</h4>
      <form method="post">
        <InputField 
          type="text" 
          placeholder="email"
          currentState={email}
          updateState={setEmail}
        />
        <InputField 
          type="password" 
          placeholder="password"
          currentState={password}
          updateState={setPassword}
        />
        <input 
          type='submit' 
          value="Submit" 
          onClick={handleLogin}
        />
      </form>
    </>
  );
}
 
export default LoginForm;