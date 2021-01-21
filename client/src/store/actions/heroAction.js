import { loadHeroesAction, loadHeroAction, addHeroAction,
         updateHeroAction } from '../reducers/heroReducer';
import { baseUrl } from '../../config';
import verifyData from './utils/verifyData';

export const getHeroes = userId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/${userId}/heroes`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadHeroesAction(data.heroes || []));
    }
    return data;
  }
};

export const getHero = heroId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/heroes/${heroId}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadHeroAction(data.hero));
    }
    return data;
  }
};

export const createHero = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/heroes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(addHeroAction(data.hero));
    }
    return data;
  }
};

export const editHero = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/heroes/${inputtedInfo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(updateHeroAction(data.hero));
    }
    return data;
  }
};

export const raiseXP = (xp, heroId) => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/heroes/${heroId}/?type=raise-xp`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({xp})
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(updateHeroAction(data.hero));
    }
    return data;
  }
};

export const updateHp = (hp, heroId) => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/heroes/${heroId}/?type=update-hp`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ hp })
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(updateHeroAction(data.hero));
    }
    return data;
  }
};