import { LOAD_USER } from '../reducers/userReducer';
import { LOAD_ERRORS } from '../reducers/errorReducer';
import { baseUrl } from '../../config';

export const validateUser = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await res.json();

    if (!res.ok) {
      console.log('errors', data)
      return dispatch({
        type: LOAD_ERRORS,
        errors: data.errors
      });
    }

    dispatch({
      type: LOAD_USER,
      user: data.user
    });
  }
};