import React, { useState } from 'react';
import ModalContainer from '../ModalContainer';

const NewDestination = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    {isModalOpen ? <ModalContainer clickHandler={clickHandler} />
    : <input value="Create a New Destination" onClick={clickHandler}/>}
    </>
  );
}
 
export default NewDestination;