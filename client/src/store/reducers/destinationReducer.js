export const LOAD_DESTINATIONS = 'LOAD_DESTINATIONS';

const destinationReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_DESTINATIONS: {
      const ids = state.map(s => s.id);
      const newDestinations = action.destinations.filter(d => {
        return !(d.id in ids);
      });

      // newDestinations.forEach(d => )
      
      return [...state, ...newDestinations];
    }
    default:
      return state;
  }
}

export default destinationReducer;