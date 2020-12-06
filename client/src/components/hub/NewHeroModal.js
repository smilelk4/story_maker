import React from 'react';
import HeroCreator from './HeroCreator';
import ModalContainer from '../ModalContainer';

const NewHeroModal = ({clickHandler}) => {
  return ( 
    <ModalContainer>
      <div className="modal">
        <HeroCreator clickHandler={clickHandler}/>
      </div>
      <div className="modal__overlay" onClick={clickHandler}></div>
    </ModalContainer>
  );
}
 
export default NewHeroModal;