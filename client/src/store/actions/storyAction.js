import { LOAD_STORIES } from '../reducers/storyReducer';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../reducers/errorReducer';
import { baseUrl } from '../../config';

const verifyData = async (res, dispatch) => {
  const data = await res.json();

  if (!res.ok) {
    dispatch({
      type: LOAD_ERRORS,
      errors: data.errors
    });
  }

  dispatch({ type: CLEAR_ERRORS });
  dispatch({
    type: LOAD_STORIES,
    stories: data.stories
  });
};

export const getStories = heroId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/heroes/${heroId}/stories`);
    verifyData(res, dispatch);
  }
};

export const createStory = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });
    // verifyData(res, dispatch);
  }
};