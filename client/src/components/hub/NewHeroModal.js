import React from 'react';
import HeroCreator from './HeroCreator';
import ModalContainer from '../ModalContainer';

const NewHeroModal = ({isModalOpen, setIsModalOpen}) => {
  return ( 
    <ModalContainer
    isModalOpen={isModalOpen}
    setIsModalOpen={setIsModalOpen}>
      <div className="modal">
        <HeroCreator setIsModalOpen={setIsModalOpen} />
      </div>
    </ModalContainer>
  );
}
 
export default NewHeroModal;