import { LOAD_DESTINATIONS } from '../reducers/destinationReducer';
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

  dispatch({ type: CLEAR_ERRORS });

  dispatch({
    type: LOAD_DESTINATIONS,
    destinations: data.destinations
  });
  
  return data;
};

export const getDestinations = storyId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${storyId}/destinations`);
    verifyData(res, dispatch);
  }
};

export const createDestination = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/destinations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    return await verifyData(res, dispatch);
  }
};