import React from 'react';
import HeroModifier from './HeroModifier';
import ModalContainer from '../ModalContainer';

const ModifyHeroModal = ({isModalOpen, setIsModalOpen,
                          editingHeroName, editingHeroId}) => {
  return ( 
    <ModalContainer
    isModalOpen={isModalOpen}
    setIsModalOpen={setIsModalOpen}>
      <HeroModifier setIsModalOpen={setIsModalOpen}
                    editingHeroName={editingHeroName}
                    editingHeroId={editingHeroId}/>
    </ModalContainer>
  );
}
 
export default ModifyHeroModal;