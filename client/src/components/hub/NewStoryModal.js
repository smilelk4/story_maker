import React from 'react';
import StoryCreator from './StoryCreator';
import ModalContainer from '../ModalContainer';

const NewStoryModal = ({clickHandler}) => {
  return ( 
    <ModalContainer>
      <div className="modal">
        <StoryCreator clickHandler={clickHandler} />
      </div>
      <div className="modal__overlay" onClick={clickHandler}></div>
    </ModalContainer>
  );
}
 
export default NewStoryModal;