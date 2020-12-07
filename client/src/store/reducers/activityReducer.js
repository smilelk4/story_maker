const LOAD_ACTIVITIES = 'LOAD_ACTIVITIES';

export const loadActivitiesAction = data => ({
  type: LOAD_ACTIVITIES,
  activities: data
});

const activityReducer = (state = {}, action) => {
  switch(action.type) {
    case LOAD_ACTIVITIES: {    
      return {...state, ...action.activities};
    }
    default:
      return state;
  }
}

export default activityReducer;