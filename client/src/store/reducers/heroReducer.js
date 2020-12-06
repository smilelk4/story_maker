const LOAD_HERO = 'LOAD_HERO';
const LOAD_HEROES = 'LOAD_HEROES';

export const loadHeroAction = data => ({
  type: LOAD_HERO,
  hero: data
});

export const loadHeroesAction = data => ({
  type: LOAD_HEROES,
  heroes: data
});

const heroReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_HERO: {
      return [action.hero]
    }
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