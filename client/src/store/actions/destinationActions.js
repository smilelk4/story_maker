import { loadDestinationsAction, 
         removeDestinationAction } from '../reducers/destinationReducer';
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

export const getPastDestinations = storyId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${storyId}/destinations/?state=accomplished`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadDestinationsAction(data.destinations));
    }
    return data;
  }
};

export const getUpcomingDestinations = storyId => {
  // debugger
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${storyId}/destinations/?state=not-accomplished`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadDestinationsAction(data.destinations));
    }
    return data;
  }
};

export const createDestination = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/destinations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadDestinationsAction(data.destinations));
    }
    return data;
  }
};

export const completeDestination = (id) => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/destinations/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ accomplished: true })
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(removeDestinationAction(data.destination));
    }
    return data;
  }
};