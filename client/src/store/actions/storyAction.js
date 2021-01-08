import { loadStoryAction, loadStoriesAction } from '../reducers/storyReducer';
import { clearDestinationsAction } from '../reducers/destinationReducer';
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

export const getStories = heroId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/heroes/${heroId}/stories`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadStoriesAction(data.stories));
    }
    return data;
  }
};

export const getStory = storyId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${storyId}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadStoryAction(data.story));
    }
    return data;
  }
};

export const createStory = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(clearDestinationsAction());
      dispatch(loadStoriesAction(data.stories));
    }
    return data;
  }
};