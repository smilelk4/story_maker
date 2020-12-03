import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputField from '../InputField';
import { validateUser } from '../../store/actions/userAction';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    const data = await dispatch(validateUser({ email, password }));
    
    if(!data.errors) {
      history.push('/my-hub');
    }
  };

  return ( 
    <>
      <h4>Login</h4>
      <form onSubmit={handleLogin}>
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
        />
      </form>
    </>
  );
}
 
export default LoginForm;