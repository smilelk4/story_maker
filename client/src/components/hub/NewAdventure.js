import React, { useState } from 'react';
import NewStoryModal from './NewStoryModal';

const NewAdventure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    {isModalOpen ? <NewStoryModal clickHandler={clickHandler} />
    : <input value="Start a New Adventure" onClick={clickHandler}/>}
    </>
  );
}
 
export default NewAdventure;