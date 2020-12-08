import React, { useState } from 'react';
import NewStoryModal from './NewStoryModal';

const NewAdventure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    {isModalOpen && <NewStoryModal clickHandler={clickHandler} />}
    <h3 
      className="hub__new-adventure"
      onClick={clickHandler}>Start a New Adventure</h3>
    </>
  );
}
 
export default NewAdventure;