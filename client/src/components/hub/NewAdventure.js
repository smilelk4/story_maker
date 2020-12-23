import React, { useState, useEffect } from 'react';
import NewStoryModal from './NewStoryModal';
import bodymovin from 'lottie-web';

const NewAdventure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    {isModalOpen && <NewStoryModal clickHandler={clickHandler} />}
    <h3 
      className="hub__new-adventure title"
      onMouseOver={animateSwords}
      onClick={clickHandler}>
      <p 
        className="new-adventure__svg-container"></p>
      Start a New Adventure</h3>
    </>
  );
}
 
export default NewAdventure;