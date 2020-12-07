const LOAD_ACTIVITIES = 'LOAD_ACTIVITIES';
const ADD_MEMOIR = 'ADD_MEMOIR';

export const loadActivitiesAction = data => ({
  type: LOAD_ACTIVITIES,
  memoirs: data
});

export const addMemoirAction = data => ({
  type: ADD_MEMOIR,
  memoir: data
});

const activityReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_ACTIVITIES: {    
      return action.activities;
    }
    default:
      return state;
  }
}

export default activityReducer;