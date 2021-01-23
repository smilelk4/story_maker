const LOAD_MONSTERS = 'LOAD_MONSTERS';
const ADD_MONSTER = 'ADD_MONSTER';
const REMOVE_MONSTER = 'REMOVE_MONSTER';
const UPDATE_MONSTER = 'UPDATE_MONSTER';
const CLEAR_MONSTERS = 'CLEAR_MONSTERS';

export const loadMonsterAction = data => ({
  type: LOAD_MONSTERS,
  monsters: data
});

export const addMonsterAction = data => ({
  type: ADD_MONSTER,
  monster: data
});

export const updateMonsterAction = data => ({
  type: UPDATE_MONSTER,
  monster: data
});

export const removeMonsterAction = data => ({
  type: REMOVE_MONSTER,
  destination: data
});

export const clearMonstersAction = () => ({
  type: CLEAR_MONSTERS,
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
          timesDefeated: monster.times_defeated,
          image: monster.MonsterImage.image_url,
          createdAt: monster.createdAt
        }));

      return [...state, ...newMonsters];
    }
    case ADD_MONSTER: {
      const newState = [...state];
      newState.unshift(action.monster);
      return newState;
    }
    case UPDATE_MONSTER: {
      const newState = [...state];
      const monsterIndex = newState.findIndex(monster => monster.id === action.monster.id);
      newState.splice(monsterIndex, 1, action.monster);
      return newState;
    }
    case CLEAR_MONSTERS: {
      return [];
    }
    default:
      return state;
  }
}

export default monsterReducer;