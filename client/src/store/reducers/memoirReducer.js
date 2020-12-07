const LOAD_MEMOIRS = 'LOAD_MEMOIRS';
const ADD_MEMOIR = 'ADD_MEMOIR';

export const loadMemoirsAction = data => ({
  type: LOAD_MEMOIRS,
  memoirs: data
});

export const addMemoirAction = data => ({
  type: ADD_MEMOIR,
  memoir: data
});

const memoirReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_MEMOIRS: {
      const ids = state.map(s => s.id);
      
      const newMemoirs = action.memoirs
        .filter(m => !(m.id in ids))
        .map(memoir => ({
          id: memoir.id,
          heroId: memoir.hero_id,
          storyId: memoir.story_id,
          title: memoir.title,
          description: memoir.description,
          hoursFought: memoir.hours_fought,
          accomplishmentLevel: memoir.accomplishment_level
        }));

      return [...state, ...newMemoirs];
    }
    case ADD_MEMOIR: {
      const newState = [...state];
      newState.unshift(action.memoir);
      return newState;
    }
    default:
      return state;
  }
}

export default memoirReducer;