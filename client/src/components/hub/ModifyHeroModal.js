import React from 'react';
import HeroModifier from './HeroModifier';
import ModalContainer from '../ModalContainer';

const ModifyHeroModal = ({isModalOpen, setIsModalOpen}) => {
  return ( 
    <ModalContainer
    isModalOpen={isModalOpen}
    setIsModalOpen={setIsModalOpen}>
      <HeroModifier setIsModalOpen={setIsModalOpen} />
    </ModalContainer>
  );
}
 
export default ModifyHeroModal;