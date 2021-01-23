import { loadMonsterAction, addMonsterAction, removeMonsterAction,
         updateMonsterAction } from '../reducers/monsterReducer';
import { baseUrl } from '../../config';
import verifyData from './utils/verifyData';

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

export const editMonster = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/monsters/${inputtedInfo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(updateMonsterAction(data.monster));
    }
    return data;
  }
};

export const updateTimesDefeated = monsterId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/monsters/${monsterId}/?query=defeat`, {
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

export const deleteMonster = id => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/monsters/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(removeMonsterAction(data.monster));
    }
    return data;
  }
};
