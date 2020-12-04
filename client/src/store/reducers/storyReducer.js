export const LOAD_STORIES = 'LOAD_STORIES';

const storyReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_STORIES: {
      return [...state, ...action.stories];
    }
    default:
      return state;
  }
}

export default storyReducer;