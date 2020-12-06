const LOAD_STORIES = 'LOAD_STORIES';

export const loadStoriesAction = data => ({
  type: LOAD_STORIES,
  stories: data
});

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