import React from 'react';
import StoryCreator from './StoryCreator';
import ModalContainer from '../ModalContainer';

const NewStoryModal = ({isModalOpen, setIsModalOpen}) => {
  return ( 
    <ModalContainer
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}>
      <StoryCreator setIsModalOpen={setIsModalOpen} />
    </ModalContainer>
  );
}
 
export default NewStoryModal;