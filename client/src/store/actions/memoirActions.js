import { loadMemoirsAction, addMemoirAction } from '../reducers/memoirReducer';
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
  } else {
    dispatch({ type: CLEAR_ERRORS });
  }
  
  return data;
};

export const getMemoirs = storyId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${storyId}/memoirs`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadMemoirsAction(data.memoirs));
    }
    return data;
  }
};

export const createMemoir = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/memoirs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(addMemoirAction(data.memoir));
    }
    return data;
  }
};