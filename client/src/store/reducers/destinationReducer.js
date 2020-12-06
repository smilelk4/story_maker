export const LOAD_DESTINATIONS = 'LOAD_DESTINATIONS';

const destinationReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_DESTINATIONS: {
      const ids = state.map(s => s.id);
      
      const newDestinations = action.destinations.filter(d => {
        return !(d.id in ids);
      });
      
      const newState = [...state, ...newDestinations];
      newState.sort((a, b) => Date.parse(a.target_date) - Date.parse(b.target_date));
      
      return [...newState];
    }
    default:
      return state;
  }
}

export default destinationReducer;