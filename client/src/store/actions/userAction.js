import { LOAD_USER } from '../reducers/userReducer';
import { loadErrors, clearErrors } from '../reducers/errorReducer';
import { baseUrl } from '../../config';

const verifyData = async (res, dispatch) => {
  const data = await res.json();

  if (!res.ok) {
    dispatch(loadErrors(data.errors || [data.title]));
    return data;
  }

  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  localStorage.setItem('user_id', data.user.id);

  dispatch(clearErrors());
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
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    return await verifyData(res, dispatch);
  }
}

export const updateProfileImage = data => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users`, {
      method: 'PUT',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body: data
    });

    return await verifyData(res, dispatch);
  }
}