import { LOAD_HERO } from '../actions/heroAction';
import { baseUrl } from '../../config';

export const getHeroes = userId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/users/${userId}/heroes`);

    console.log(await res.json(), "!!!!!")
  }
};