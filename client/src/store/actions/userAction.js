import LOAD_USER from '../reducers/userReducer';
import LOAD_ERRORS from '../reducers/errorReducer';
import { baseUrl } from '../../config';

export const validateUser = data => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const data = await res.json();

    if (!res.ok) {
      dispatch({
        type: LOAD_ERRORS,
        errors: data.errors;
      })
    }

  }
};