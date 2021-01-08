import { loadMonsterAction, addMonsterAction,
         updateMonsterAction } from '../reducers/monsterReducer';
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

export const getMonsters = storyId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${storyId}/monsters`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadMonsterAction(data.monsters));
    }
    return data;
  }
};

export const createMonster = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/monsters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(addMonsterAction(data.monster));
    }
    return data;
  }
};

export const updateTimesDefeated = monsterId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/monsters/${monsterId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(updateMonsterAction(data.monster));
    }
    return data;
  }
};