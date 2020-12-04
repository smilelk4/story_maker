import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from './Hero';
import { getHeroes } from '../../store/actions/heroAction';

const HeroContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const heroes = useSelector(state => state.hero);

  useEffect(() => {
    if (userId) {
      dispatch(getHeroes(userId));
    }
  }, [userId, dispatch]);

  return (
    <div className="hero__container">
      {heroes.map(hero => <Hero {...hero} />)}
    </div>
  );
}
 
export default HeroContainer;