import { loadProgressAction } from '../reducers/progressReducer';
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

export const getProgress = storyId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${storyId}/progress`);
    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadProgressAction(data.progress));
    }
    return data;
  }
};