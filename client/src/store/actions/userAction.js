import { LOAD_USER } from '../reducers/userReducer';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../reducers/errorReducer';
import { baseUrl } from '../../config';

export const validateUser = inputtedInfo => {
  return async dispatch => {
    dispatch({ type: CLEAR_ERRORS });

    const res = await fetch(`${baseUrl}/users/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await res.json();

    if (!res.ok) {
      dispatch({
        type: LOAD_ERRORS,
        errors: data.errors
      });
      return data;
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('user_id', data.user.id);

    dispatch({
      type: LOAD_USER,
      user: data.user
    });
    return data;
  }
};