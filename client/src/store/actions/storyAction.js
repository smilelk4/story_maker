import { loadStoryAction, loadStoriesAction, 
         editStoryAction } from '../reducers/storyReducer';
import { clearDestinationsAction } from '../reducers/destinationReducer';
import { baseUrl } from '../../config';
import verifyData from './utils/verifyData';

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

export const editStory = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${inputtedInfo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(editStoryAction(data.story));
    }
    return data;
  }
};