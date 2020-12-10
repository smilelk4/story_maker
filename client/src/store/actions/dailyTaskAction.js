import { loadTasksAction } from '../reducers/dailyTaskReducer';
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

export const getDailyTasks = storyId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${storyId}/tasks`);
    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadTasksAction(data.tasks));
    }
    return data;
  }
};