import { LOAD_HEROES } from '../reducers/heroReducer';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../reducers/errorReducer';
import { baseUrl } from '../../config';

const verifyData = async (res, dispatch) => {
  const data = await res.json();

  if (!res.ok) {
    dispatch({
      type: LOAD_ERRORS,
      errors: data.errors
    });
  } else {
    dispatch({ type: CLEAR_ERRORS });
  }
  return data;
};

export const getHeroes = userId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/${userId}/heroes`);

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch({
        type: LOAD_HEROES,
        heroes: data.heroes
      });
    }
    return data;
  }
};

export const getHero = storyId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${storyId}/heroes`);

    verifyData(res, dispatch);
  }
};