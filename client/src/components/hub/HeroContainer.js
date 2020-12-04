import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from './Hero';
import { getHeroes } from '../../store/actions/heroAction';

const HeroContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);

  useEffect(() => {
    dispatch(getHeroes)
  });

  return ( 
    <div className="hero__container">
      <Hero />
    </div>
  );
}
 
export default HeroContainer;