const LOAD_MEMOIRS = 'LOAD_MEMOIRS';

export const loadMemoirsAction = data => ({
  type: LOAD_MEMOIRS,
  memoirs: data
});

const memoirReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_MEMOIRS: {
      return action.memoirs.map(memoir => ({
        // id: hero.id,
        // world_id: hero.world_id,
        // name: hero.name,
        // level: hero.level,
        // hp: hero.hp,
        // xp: hero.xp,
        // image: hero.HeroImage.image_url
      }));
    }
    default:
      return state;
  }
}

export default memoirReducer;