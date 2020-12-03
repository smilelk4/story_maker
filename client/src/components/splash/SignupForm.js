import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputField from '../InputField';
import { createUser } from '../../store/actions/userAction';
import { LOAD_ERRORS } from '../../store/reducers/errorReducer';

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const HandleSignup = async e => {
    e.preventDefault();
    const data = await dispatch(createUser({ username, email, password, confirmPassword }));
    
    if(!data.errors) {
      history.push('/my-hub');
    }
  };

  return ( 
    <>
      <h4>Sign Up</h4>
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
        <input 
          type='submit' 
          value="Submit" 
        />
      </form>
    </>
  );
}
 
export default SignupForm;