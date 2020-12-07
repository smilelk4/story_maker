import { loadActivitiesAction } from '../reducers/activityReducer';
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

export const getActivities = heroId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/heroes/${heroId}/activities`);
    const data = await verifyData(res, dispatch);

    console.log('DATA', data)

    if (!data.errors) {
      dispatch(loadActivitiesAction(data.activities));
    }
    return data;
  }
};