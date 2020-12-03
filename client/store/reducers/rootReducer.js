import { combineReducers } from 'redux';
import user from './userReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({
  user,
  errors
});

export default rootReducer;