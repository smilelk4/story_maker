import { LOAD_HEROES } from '../reducers/heroReducer';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../reducers/errorReducer';
import { baseUrl } from '../../config';

const verifyData = async (res, dispatch) => {
  const data = await res.json();

  console.log(data, '!!!')
  if (!res.ok) {
    dispatch({
      type: LOAD_ERRORS,
      errors: data.errors
    });
  }

  dispatch({ type: CLEAR_ERRORS });
  dispatch({
    type: LOAD_HEROES,
    heroes: data.heroes
  });
};

export const getHeroes = userId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/${userId}/heroes`);

    verifyData(res, dispatch);
  }
};