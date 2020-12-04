import { LOAD_USER } from '../reducers/userReducer';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../reducers/errorReducer';
import { baseUrl } from '../../config';

const verifyData = async (res, dispatch) => {
  const data = await res.json();

  if (!res.ok) {
    dispatch({
      type: LOAD_ERRORS,
      errors: data.errors
    });
    return data;
  }

  console.log(data, "DATAAA")

  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  localStorage.setItem('user_id', data.user.id);

  dispatch({ type: CLEAR_ERRORS });
  dispatch({
    type: LOAD_USER,
    user: data.user
  });
  return data;
};

export const validateUser = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    return await verifyData(res, dispatch);
  }
};

export const createUser = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    return await verifyData(res, dispatch);
  }
}

export const getUser = token => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/token`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    verifyData(res, dispatch);
  }
}