import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputField from '../InputField';
import { createUser } from '../../store/actions/userAction';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const HandleSignup = async e => {
    e.preventDefault();
    const data = await dispatch(createUser({ username, email, password, confirmPassword }));
    
    if(data && !data.errors) {
      window.location.href = '/my-hub';
    }
  };

  return ( 
    <div className="splash__form">
      <h4 className="title">Sign Up</h4>
      <form onSubmit={HandleSignup}>
        <InputField 
          type="text" 
          placeholder="Username"
          currentState={username}
          updateState={setUsername}
        />
        <InputField 
          type="email" 
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
        <InputField 
          type="password" 
          placeholder="Confirm password"
          currentState={confirmPassword}
          updateState={setConfirmPassword}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}
 
export default SignupForm;