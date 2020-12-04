export const LOAD_HERO = 'LOAD_HERO';

const heroReducer = (state = {}, action) => {
  switch(action.type) {
    case LOAD_HERO: {
      return {
        id: action.hero.id,
        world_id: action.hero.world_id,
        name: action.hero.name,
        level: action.hero.level,
        hp: action.hero.hp,
        xp: action.hero.xp
      };
    }
    default:
      return state;
  }
}

export default heroReducer;