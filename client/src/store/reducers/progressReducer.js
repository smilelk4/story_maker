const LOAD_PROGRESS = "LOAD_PROGRESS";

export const loadProgressAction = data => ({
  type: LOAD_PROGRESS,
  progress: data
});

const progressReducer = (state = 0, action) => {
  switch(action.type) {
    case LOAD_PROGRESS:
      return action.progress
    default:
      return state;
  }
}

export default progressReducer;