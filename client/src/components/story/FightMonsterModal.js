import React from 'react';
import MonsterFighter from './MonsterFighter';
import ModalContainer from '../ModalContainer';

const FightMonsterModal = ({clickHandler}) => {
  return ( 
    <ModalContainer>
      <div className="modal">
        <MonsterFighter clickHandler={clickHandler}/>
      </div>
      <div className="modal__overlay" onClick={clickHandler}></div>
    </ModalContainer>
  );
}
 
export default FightMonsterModal;