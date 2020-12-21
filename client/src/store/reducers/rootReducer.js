import { combineReducers } from 'redux';
import token from './tokenReducer';
import user from './userReducer';
import hero from './heroReducer';
import story from './storyReducer';
import memoir from './memoirReducer';
import destination from './destinationReducer';
import progress from './progressReducer';
import activity from './activityReducer';
import task from './dailyTaskReducer';
import monster from './monsterReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({
  token,
  user,
  hero,
  story,
  destination,
  progress,
  memoir,
  activity,
  task,
  monster,
  errors
});

export default rootReducer;