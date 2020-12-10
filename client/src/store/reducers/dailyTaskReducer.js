const LOAD_TASKS = 'LOAD_TASKS';
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';

export const loadTasksAction = data => ({
  type: LOAD_TASKS,
  tasks: data
});

export const addTaskAction = data => ({
  type: ADD_TASK,
  task: data
});

export const removeTaskAction = data => ({
  type: REMOVE_TASK,
  task: data
});

const taskReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_TASKS: {    
      const ids = state.map(s => s.id);
      
      const newTasks = action.tasks.filter(t => {
        return !(ids.includes(t.id));
      });

      return [...state, ...newTasks];
    }
    case ADD_TASK: {
      const newState = [...state];
      newState.push(action.task);
      return newState;
    }
    case REMOVE_TASK: {
      const newState = state.filter(task => task.id !== action.task.id);
      return newState;
    }
    default:
      return state;
  }
}

export default taskReducer;