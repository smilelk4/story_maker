import React, { useState } from 'react';
import StoryCreator from '../hub/StoryCreator';
import ModalContainer from '../ModalContainer';

const DeleteStoryModal = ({isModalOpen, setIsModalOpen, storyTitle}) => {
  const [input, setInput] = useState('');
  return ( 
    <ModalContainer
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}>
      <h2 className="modal__title title">Are you sure?</h2>
      <div>
        <h3>{storyTitle}</h3>
        <p>All destinations, monsters, daily tasks, and memoirs associated with the story will be deleted.</p>
      </div>
      <div className="modal__delete">
        <p>If you are sure to delete, please type 'delete' below.</p>
        <input type="text" 
               value={input} 
               name="title"
               onChange={e => setInput(e.target.value)} />
        {input === 'delete' && (
        <button visible={input !== 'delete'}>Delete</button>
        )}
      </div>
    </ModalContainer>
  );
}
 
export default DeleteStoryModal;