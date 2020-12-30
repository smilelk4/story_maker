import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FightMonsterModal from './FightMonsterModal';
import bodymovin from 'lottie-web';

const FightMonster = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const monsters = useSelector(state => state.monster);

  const animationCreator = () => {
    bodymovin.loadAnimation({
      wrapper: document.querySelector('.new-adventure__svg-container'),
      animType: 'svg',
      loop: false,
      path: '/svg/swords.json',
      name: 'swords'
    });
  };

  useEffect(() => {
    animationCreator();
  }, []);

  const animateSwords = () => {
    bodymovin.destroy('swords');
    animationCreator();
  };

  const clickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <FightMonsterModal clickHandler={clickHandler} />}
      <h3 
        className="hub__new-adventure title"
        onMouseOver={animateSwords}
        onClick={clickHandler}>
        <p className="new-adventure__svg-container"></p>
        Fight a Monster
      </h3>
    </>
  );
}
 
export default FightMonster;