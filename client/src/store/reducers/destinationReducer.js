export const LOAD_DESTINATIONS = 'LOAD_DESTINATIONS';

const destinationReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_DESTINATIONS: {
      return [...state, ...action.destinations];
    }
    default:
      return state;
  }
}

export default destinationReducer;