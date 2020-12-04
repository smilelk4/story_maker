import React, { useState } from 'react';
import ModalContainer from '../ModalContainer';

const NewAdventure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    {isModalOpen ? <ModalContainer clickHandler={clickHandler} />
    : <input value="Start a New Adventure" onClick={clickHandler}/>}
    </>
  );
}
 
export default NewAdventure;