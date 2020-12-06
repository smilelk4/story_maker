import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from './Hero';
import { getHeroes } from '../../store/actions/heroAction';
import NewHeroModal from './NewHeroModal';

const HeroContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const heroes = useSelector(state => state.hero);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (userId) {
      dispatch(getHeroes(userId));
    }
  }, [userId, dispatch]);

  const clickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="hero__container">
      {isModalOpen ? <NewHeroModal clickHandler={clickHandler} />
       : <input value="Create a New Hero" onClick={clickHandler}/>}
      {heroes.map(hero => <Hero {...hero} />)}
    </div>
  );
}
 
export default HeroContainer;