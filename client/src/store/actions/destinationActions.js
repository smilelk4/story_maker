import { loadDestinationsAction, editDestinationAction,
         removeDestinationAction } from '../reducers/destinationReducer';
import { baseUrl } from '../../config';
import verifyData from './utils/verifyData';

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

export const editDestination = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/destinations/${inputtedInfo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(editDestinationAction(data.destination));
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

export const deleteDestination = id => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/destinations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(removeDestinationAction(data.destination));
    }
    return data;
  }
};