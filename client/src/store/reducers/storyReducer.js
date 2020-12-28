const LOAD_STORY = 'LOAD_STORY';
const LOAD_STORIES = 'LOAD_STORIES';
const CLEAR_STORIES = 'CLEAR_STORIES';

export const loadStoryAction = data => ({
  type: LOAD_STORY,
  story: data
});

export const loadStoriesAction = data => ({
  type: LOAD_STORIES,
  stories: data
});

export const clearStoriesAction = () => ({
  type: CLEAR_STORIES,
});

const storyReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_STORY: {
      return [action.story]
    }
    case LOAD_STORIES: {
      const ids = state.map(s => s.id);
      
      const newStories = action.stories.filter(d => {
        return !(ids.includes(d.id));
      });
      
      return [...state, ...newStories];
    }
    case CLEAR_STORIES: {
      return [];
    }
    default:
      return state;
  }
}

export default storyReducer;