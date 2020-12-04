export const LOAD_HEROES = 'LOAD_HERO';

const heroReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_HEROES: {
      return action.heroes.map(hero => ({
        id: hero.id,
        world_id: hero.world_id,
        name: hero.name,
        level: hero.level,
        hp: hero.hp,
        xp: hero.xp,
        image: hero.HeroImage.image_url
      }));
    }
    default:
      return state;
  }
}

export default heroReducer;