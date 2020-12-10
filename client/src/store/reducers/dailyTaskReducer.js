const LOAD_TASKS = 'LOAD_TASKS';

export const loadTasksAction = data => ({
  type: LOAD_TASKS,
  tasks: data
});

const taskReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_TASKS: {    
      return [...state, ...action.tasks];
    }
    default:
      return state;
  }
}

export default taskReducer;