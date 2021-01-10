import { loadActivitiesAction, updateActivityAction } from '../reducers/activityReducer';
import { baseUrl } from '../../config';
import verifyData from './utils/verifyData';

export const getActivities = heroId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/heroes/${heroId}/activities/?tz=${
                            Intl.DateTimeFormat().resolvedOptions().timeZone}`, {
                              headers : { 
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                               }
                            });
    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadActivitiesAction(data.activities));
    }
    return data;
  }
};

export const createActivity = (heroId, userTime) => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/activities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({heroId, userTime: userTime.format()})
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(updateActivityAction(data.activity));
    }
    return data;
  }
};

export const updateActivity = (heroId, userTime) => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/activities/?tz=${Intl.DateTimeFormat().resolvedOptions().timeZone}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({heroId, userTime: userTime.format()})
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(updateActivityAction(data.activity));
    }
    return data;
  }
};

