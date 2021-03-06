import { loadTasksAction, addTaskAction, 
         editTaskAction, removeTaskAction } from '../reducers/dailyTaskReducer';
import { baseUrl } from '../../config';
import verifyData from './utils/verifyData';

export const getDailyTasks = storyId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/stories/${storyId}/tasks`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(loadTasksAction(data.tasks));
    }
    return data;
  }
};

export const createDailyTask = inputtedInfo => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inputtedInfo)
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(addTaskAction(data.task));
    }
    return data;
  }
};

export const completeDailyTask = taskId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(removeTaskAction(data.task));
    }
    return data;
  }
};

export const editDailyTask = (taskId, inputtedIInfo) => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({inputtedIInfo})
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(editTaskAction(data.task));
    }
    return data;
  }
};

export const deleteDailyTask = taskId => {
  return async dispatch => {
    const res = await fetch(`${baseUrl}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    const data = await verifyData(res, dispatch);

    if (!data.errors) {
      dispatch(removeTaskAction(data.task));
    }
    return data;
  }
};