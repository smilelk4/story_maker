const LOAD_ACTIVITIES = 'LOAD_ACTIVITIES';
// const UPDATE_ACTIVITIES = 'UPDATE_ACTIVITIES';

export const loadActivitiesAction = data => ({
  type: LOAD_ACTIVITIES,
  activities: data
});

// export const updateActivityAction = data => ({
//   type: UPDATE_ACTIVITIES,
//   activity: data
// });

const activityReducer = (state = {}, action) => {
  switch(action.type) {
    case LOAD_ACTIVITIES: {    
      return {...state, ...action.activities};
    }
    // case UPDATE_ACTIVITIES: {
    //   return {...state, ...action.activities};
    // }
    default:
      return state;
  }
}

export default activityReducer;