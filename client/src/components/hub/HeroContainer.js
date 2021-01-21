import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Hero from './Hero';
import { getHeroes } from '../../store/actions/heroAction';
import NewHeroModal from './NewHeroModal';
import ModifyHeroModal from './ModifyHeroModal';
import ScrollArrow from './ScrollArrow';

const HeroContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const heroes = useSelector(state => state.hero);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
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
      <ScrollArrow handleLeftScroll={handleLeftScroll}
                   handleRightScroll={handleRightScroll}/>
      {isCreateModalOpen && <NewHeroModal isModalOpen={isCreateModalOpen}
                                    setIsModalOpen={setIsCreateModalOpen} />}
      {isModifyModalOpen && <ModifyHeroModal isModalOpen={isModifyModalOpen}
                                    setIsModalOpen={setIsModifyModalOpen} />}
      <p className="hero__new-hero" onClick={() => setIsCreateModalOpen(true)}>
         <AddCircleOutlineIcon />
      </p>
      {heroes.length ? (heroes.map(hero => (
          <div onClick={() => setIsModifyModalOpen(true)}>
            <Hero {...hero} key={hero.id}/>
          </div>
        ))) : (
        <div className="hub__content--empty">
          <p>There are no heroes yet.</p>
          <p>Click on + to create your first hero.</p>
        </div>
      )}
    </div>
  );
}
 
export default HeroContainer;