import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Hero from './Hero';
import { getHeroes } from '../../store/actions/heroAction';
import NewHeroModal from './NewHeroModal';

const HeroContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const heroes = useSelector(state => state.hero);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const container = useRef(null);

  const handleLeftScroll = () => {
    container.current.scrollLeft -= 100;

  };
  const handleRightScroll = () => {
    container.current.scrollLeft += 100;
  };

  useEffect(() => {
    if (userId) {
      dispatch(getHeroes(userId));
    }
  }, [userId, dispatch]);

  return (
    <div className="hero__container" ref={container}>
      <div className="hero__container-left-scroll" 
            onClick={handleLeftScroll}>&#9001;</div>
      <div className="hero__container-right-scroll"
            onClick={handleRightScroll}>&#9002;</div>
      {isModalOpen && <NewHeroModal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} />}
      <h4 
        className="hero__new-hero title"
        onClick={() => setIsModalOpen(true)}>Create a New Hero</h4>
      {heroes.map(hero => <Hero {...hero} key={hero.id}/>)}
    </div>
  );
}
 
export default HeroContainer;