const LOAD_ACTIVITIES = 'LOAD_ACTIVITIES';
const UPDATE_ACTIVITIES = 'UPDATE_ACTIVITIES';

export const loadActivitiesAction = data => ({
  type: LOAD_ACTIVITIES,
  activities: data
});

export const updateActivityAction = data => ({
  type: UPDATE_ACTIVITIES,
  activity: data
});

const activityReducer = (state = {}, action) => {
  // debugger
  switch(action.type) {
    case LOAD_ACTIVITIES: {    
      return {...state, ...action.activities};
    }
    case UPDATE_ACTIVITIES: {
      const newState = {...state};
      const heroId = action.activity.hero_id;
      const month = new Date(action.activity.createdAt).getMonth() + 1;
      const date = new Date(action.activity.createdAt).getDate();
      newState[heroId][month][date - 1] = action.activity.action;

      return newState;
    }
    default:
      return state;
  }
}

export default activityReducer;