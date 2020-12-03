import LOAD_USER from '../reducers/userReducer';

export const validateUser = data => {
  return async dispatch => {
    const res = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    console.log('!!!', await res.json())
  }
};