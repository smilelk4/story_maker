const LOAD_TASKS = 'LOAD_TASKS';

export const loadTasksAction = data => ({
  type: LOAD_TASKS,
  tasks: data
});

const taskReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_TASKS: {    
      const ids = state.map(s => s.id);
      
      const newTasks = action.tasks.filter(d => {
        return !(d.id in ids);
      });

      return [...state, ...newTasks];
    }
    default:
      return state;
  }
}

export default taskReducer;