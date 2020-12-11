const LOAD_HERO = 'LOAD_HERO';
const LOAD_HEROES = 'LOAD_HEROES';
const ADD_HERO = 'ADD_HERO';
const UPDATE_HERO = 'UPDATE_HERO';

export const loadHeroAction = data => ({
  type: LOAD_HERO,
  hero: data
});

export const loadHeroesAction = data => ({
  type: LOAD_HEROES,
  heroes: data
});

export const addHeroAction = data => ({
  type: ADD_HERO,
  hero: data
});

export const updateHeroAction = data => ({
  type: UPDATE_HERO,
  hero: data
});

const heroReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_HERO: {
      return [action.hero]
    }
    case LOAD_HEROES: {
      return action.heroes.map(hero => ({
        id: hero.id,
        worldId: hero.world_id,
        name: hero.name,
        level: hero.level,
        hp: hero.hp,
        xp: hero.xp,
        image: hero.HeroImage.image_url
      }));
    }
    case ADD_HERO: {
      const newState = [...state];
      newState.push(action.hero);
      return newState;
    }
    case UPDATE_HERO: {
      const newState = [...state];
      const heroIndexToModify = newState.findIndex(hero => hero.id === action.hero.id);
      newState.splice(heroIndexToModify, 1, action.hero);
      return newState;
    }
    default:
      return state;
  }
}

export default heroReducer;