import { loadHeroesAction, loadHeroAction, addHeroAction,
         updateHeroAction } from '../reducers/heroReducer';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../reducers/errorReducer';
import { baseUrl } from '../../config';

const verifyData = async (res, dispatch) => {
  const data = await res.json();

  if (!res.ok) {
    dispatch({
      type: LOAD_ERRORS,
      errors: data.errors || [data.title]
    });
  } else {
    dispatch({ type: CLEAR_ERRORS });
  }
  return data;
};

export const getHeroes = userId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/${userId}/heroes`);

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadHeroesAction(data.heroes || []));
    }
    return data;
  }
};

export const getHero = heroId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/heroes/${heroId}`);

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
        'Content-Type': 'application/json'
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

export const raiseXP = (xp, heroId) => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/heroes/${heroId}/?type=raise-xp`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
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
        'Content-Type': 'application/json'
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