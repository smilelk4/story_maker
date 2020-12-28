export const LOAD_TOKEN = "LOAD_TOKEN";
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const clearTokenAction = () => ({
  type: REMOVE_TOKEN,
});

const tokenReducer = (state = '', action) => {
  switch(action.type) {
    case LOAD_TOKEN:
      return action.token
    case REMOVE_TOKEN:
      return '';
    default:
      return state;
  }
}

export default tokenReducer;