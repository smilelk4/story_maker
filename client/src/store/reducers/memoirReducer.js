const LOAD_MEMOIRS = 'LOAD_MEMOIRS';

export const loadMemoirsAction = data => ({
  type: LOAD_MEMOIRS,
  memoirs: data
});

const memoirReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_MEMOIRS: {
      return action.memoirs.map(memoir => ({
        id: memoir.id,
        heroId: memoir.hero_id,
        storyId: memoir.story_id,
        title: memoir.title,
        description: memoir.description,
        hoursFought: memoir.hours_fought,
        accomplishmentLevel: memoir.accomplishment_level
      }));
    }
    default:
      return state;
  }
}

export default memoirReducer;