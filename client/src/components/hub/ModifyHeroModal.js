import React from 'react';
import HeroModifier from './HeroModifier';
import ModalContainer from '../ModalContainer';

const ModifyHeroModal = ({isModalOpen, setIsModalOpen, editingHeroName}) => {
  return ( 
    <ModalContainer
    isModalOpen={isModalOpen}
    setIsModalOpen={setIsModalOpen}>
      <HeroModifier setIsModalOpen={setIsModalOpen}
                    editingHeroName={editingHeroName}/>
    </ModalContainer>
  );
}
 
export default ModifyHeroModal;