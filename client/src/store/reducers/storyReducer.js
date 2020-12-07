const LOAD_STORY = 'LOAD_STORY';
const LOAD_STORIES = 'LOAD_STORIES';

export const loadStoryAction = data => ({
  type: LOAD_STORY,
  story: data
});

export const loadStoriesAction = data => ({
  type: LOAD_STORIES,
  stories: data
});

const storyReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_STORY: {
      return [action.story]
    }
    case LOAD_STORIES: {
      const ids = state.map(s => s.id);
      
      const newStories = action.stories.filter(d => {
        return !(d.id in ids);
      });
      
      return [...state, ...newStories];
    }
    default:
      return state;
  }
}

export default storyReducer;