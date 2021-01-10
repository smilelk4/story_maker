export const LOAD_ERRORS = 'ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const loadErrors = errors => ({
  type: LOAD_ERRORS,
  errors
});

const errorReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default errorReducer; 