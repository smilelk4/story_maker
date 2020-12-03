import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputField from '../InputField';
import { validateUser } from '../../store/actions/userAction';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    dispatch(validateUser({ username, password }));
  };

  return ( 
    <>
      <h4>Login</h4>
      <form method="post">
        <InputField 
          type="text" 
          placeholder="username"
          currentState={username}
          updateState={setUsername}
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