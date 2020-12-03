import { combineReducers } from 'redux';
import token from './tokenReducer';
import user from './userReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({
  token,
  user,
  errors
});

export default rootReducer;