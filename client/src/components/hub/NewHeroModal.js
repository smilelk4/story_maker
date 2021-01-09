import React from 'react';
import HeroCreator from './HeroCreator';
import ModalContainer from '../ModalContainer';

const NewHeroModal = ({isModalOpen, setIsModalOpen}) => {
  return ( 
    <ModalContainer
    isModalOpen={isModalOpen}
    setIsModalOpen={setIsModalOpen}>
      <HeroCreator setIsModalOpen={setIsModalOpen} />
    </ModalContainer>
  );
}
 
export default NewHeroModal;