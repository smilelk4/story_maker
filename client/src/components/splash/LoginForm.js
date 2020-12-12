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