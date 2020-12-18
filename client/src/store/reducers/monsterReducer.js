const LOAD_MONSTERS = 'LOAD_MONSTERS';
const ADD_MONSTER = 'ADD_MONSTER';

export const loadMonsterAction = data => ({
  type: LOAD_MONSTERS,
  monsters: data
});

export const addMonsterAction = data => ({
  type: ADD_MONSTER,
  monster: data
});

const monsterReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_MONSTERS: {
      const ids = state.map(s => s.id);
      
      const newMonsters = action.monsters
        .filter(m => !(m.id in ids))
        .map(monster => ({
          id: monster.id,
          storyId: monster.storyId,
          name: monster.name,
          strength: monster.strength,
          timesDefeated: monster.timesDefeated,
          createdAt: monster.createdAt
        }));

      return [...state, ...newMonsters];
    }
    case ADD_MONSTER: {
      const newState = [...state];
      newState.unshift(action.monster);
      return newState;
    }
    default:
      return state;
  }
}

export default monsterReducer;