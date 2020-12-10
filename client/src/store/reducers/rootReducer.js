import { combineReducers } from 'redux';
import token from './tokenReducer';
import user from './userReducer';
import hero from './heroReducer';
import story from './storyReducer';
import memoir from './memoirReducer';
import destination from './destinationReducer';
import activity from './activityReducer';
import task from './dailyTaskReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({
  token,
  user,
  hero,
  story,
  destination,
  memoir,
  activity,
  task,
  errors
});

export default rootReducer;