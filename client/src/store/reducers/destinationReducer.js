const LOAD_DESTINATIONS = 'LOAD_DESTINATIONS';
const REMOVE_DESTINATION = 'REMOVE_DESTINATION';
const CLEAR_DESTINATIONS = 'CLEAR_DESTINATIONS';

export const loadDestinationsAction = data => ({
  type: LOAD_DESTINATIONS,
  destinations: data
});

export const removeDestinationAction = data => ({
  type: REMOVE_DESTINATION,
  destination: data
});

export const clearDestinationsAction = () => ({
  type: CLEAR_DESTINATIONS,
});

const destinationReducer = (state = [], action) => {
  // debugger
  switch(action.type) {
    case LOAD_DESTINATIONS: {
      const ids = state.map(s => s.id);
      
      const newDestinations = action.destinations.filter(d => {
        return !(ids.includes(d.id));
      });
      
      const newState = [...state, ...newDestinations];
      newState.sort((a, b) => Date.parse(a.target_date) - Date.parse(b.target_date));
      
      return newState;
    }
    case REMOVE_DESTINATION: {
      const newState = state.filter(destination => {
        return destination.id !== action.destination.id
      });
      return newState;
    }
    case CLEAR_DESTINATIONS: {
      // debugger
      return [];
    }
    default:
      return state;
  }
}

export default destinationReducer;