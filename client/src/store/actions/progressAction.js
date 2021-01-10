import { loadProgressAction } from '../reducers/progressReducer';
import { baseUrl } from '../../config';
import verifyData from './utils/verifyData';

export const getProgress = storyId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${storyId}/progress`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadProgressAction(data.progress));
    }
    return data;
  }
};