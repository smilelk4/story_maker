const LOAD_STORY = 'LOAD_STORY';
const LOAD_STORIES = 'LOAD_STORIES';
const EDIT_STORY = 'EDIT_STORY';
const REMOVE_STORY = 'REMOVE_STORY';
const CLEAR_STORIES = 'CLEAR_STORIES';

export const loadStoryAction = data => ({
  type: LOAD_STORY,
  story: data
});

export const loadStoriesAction = data => ({
  type: LOAD_STORIES,
  stories: data
});

export const editStoryAction = data => ({
  type: EDIT_STORY,
  story: data
});

export const removeStoryAction = data => ({
  type: REMOVE_STORY,
  story: data
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
    case EDIT_STORY: {
      const newState = [...state];
      const indexOfEdittedStory = newState.findIndex(story => (
        story.id === action.story.id));
      newState.splice(indexOfEdittedStory, 1, action.story);
      return newState;
    }
    case REMOVE_STORY: {
      debugger;
      return state.filter(story => story.id !== +action.story);
    }
    case CLEAR_STORIES: {
      return [];
    }
    default:
      return state;
  }
}

export default storyReducer;