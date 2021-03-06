const LOAD_TASKS = 'LOAD_TASKS';
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const CLEAR_TASKS = 'CLEAR_TASKS';

export const loadTasksAction = data => ({
  type: LOAD_TASKS,
  tasks: data
});

export const addTaskAction = data => ({
  type: ADD_TASK,
  task: data
});

export const editTaskAction = data => ({
  type: EDIT_TASK,
  task: data
});

export const removeTaskAction = data => ({
  type: REMOVE_TASK,
  task: data
});

export const clearTasksAction = () => ({
  type: CLEAR_TASKS,
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
    case EDIT_TASK: {
      const newState = [...state];
      const indexOfEdittedTask = newState.findIndex(task => (
            task.id === action.task.id));
      newState.splice(indexOfEdittedTask, 1, action.task);
      return newState;
    }
    case REMOVE_TASK: {
      return state.filter(task => task.id !== +action.task.id);
    }
    case CLEAR_TASKS: {
      return [];
    }
    default:
      return state;
  }
}

export default taskReducer;