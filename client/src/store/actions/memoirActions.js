import { loadMemoirsAction, removeMemoirAction,
         addMemoirAction, editMemoirAction } from '../reducers/memoirReducer';
import { baseUrl } from '../../config';
import verifyData from './utils/verifyData';

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

export const editMemoir = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/memoirs/${inputtedInfo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(editMemoirAction(data.memoir));
    }
    return data;
  }
};

export const deleteMemoir = id => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/memoirs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(removeMemoirAction(data.memoir));
    }
    return data;
  }
};