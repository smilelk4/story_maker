import React from 'react';
import StoryCreator from './hub/StoryCreator';

const Modal = ({clickHandler}) => {
  return ( 
    <>
      <div className="modal">
        <StoryCreator />
      </div>
      <div className="modal__overlay" onClick={clickHandler}></div>
    </>
  );
}
 
export default Modal;