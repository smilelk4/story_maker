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
  const [profileImage, setProfileImage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const HandleSignup = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return dispatch({
        type: LOAD_ERRORS,
        errors: ['Password fields must match.']
      });
    }

    const data = await dispatch(createUser({ username, email, password, profileImage }));
    
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
          type="text" 
          placeholder="Email"
          currentState={email}
          updateState={setEmail}
        />
        <InputField 
          type="text" 
          placeholder="Profile Image Url"
          currentState={profileImage}
          updateState={setProfileImage}
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