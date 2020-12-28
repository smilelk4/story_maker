import React, { useState, useEffect } from 'react';
import NewStoryModal from './NewStoryModal';
import swordAnimation from '../../animation/swordAnimation';

const NewAdventure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

   useEffect(() => {
    swordAnimation();
  }, []);

  const clickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <NewStoryModal clickHandler={clickHandler} />}
      <h3 
        className="hub__new-adventure title"
        onMouseOver={swordAnimation}
        onClick={clickHandler}>
        <p className="new-adventure__svg-container"></p>
        Start a New Adventure
      </h3>
    </>
  );
}
 
export default NewAdventure;