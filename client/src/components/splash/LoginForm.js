import React, { useState } from 'react';
import InputField from '../InputField';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return ( 
    <>
    <h4>Login</h4>
    <form method="post" action="/my-hub">
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
      <input type='submit' value="Submit" />
    </form>
    </>
  );
}
 
export default LoginForm;