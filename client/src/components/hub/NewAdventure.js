import React, { useState } from 'react';
import Modal from '../Modal';

const NewAdventure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = () => {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen)
  };

  return (
    <>
    {isModalOpen ? <Modal clickHandler={clickHandler} />
    : <input value="Start a New Adventure" onClick={clickHandler}/>}
    </>
  );
}
 
export default NewAdventure;