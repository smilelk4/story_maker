import React from 'react';
import StoryCreator from '../hub/StoryCreator';
import ModalContainer from '../ModalContainer';

const DeleteStoryModal = ({isModalOpen, setIsModalOpen}) => {
  return ( 
    <ModalContainer
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}>
      <StoryCreator setIsModalOpen={setIsModalOpen} />
    </ModalContainer>
  );
}
 
export default DeleteStoryModal;