const LOAD_PROGRESS = "LOAD_PROGRESS";
const CLEAR_PROGRESS = "CLEAR_PROGRESS";

export const loadProgressAction = data => ({
  type: LOAD_PROGRESS,
  progress: data
});

export const clearProgressAction = () => ({
  type: CLEAR_PROGRESS
});

const progressReducer = (state = 0, action) => {
  switch(action.type) {
    case LOAD_PROGRESS: {
      return action.progress
    }
    case CLEAR_PROGRESS: {
      return 0;
    }
    default:
      return state;
  }
}

export default progressReducer;