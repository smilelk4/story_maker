import { combineReducers } from 'redux';
import token from './tokenReducer';
import user from './userReducer';
import hero from './heroReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({
  token,
  user,
  hero,
  errors
});

export default rootReducer;