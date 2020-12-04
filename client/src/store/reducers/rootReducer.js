import { combineReducers } from 'redux';
import token from './tokenReducer';
import user from './userReducer';
import hero from './heroReducer';
import story from './storyReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({
  token,
  user,
  hero,
  story,
  errors
});

export default rootReducer;