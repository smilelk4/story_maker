import React from 'react';
import MonsterFighter from './MonsterFighter';
import ModalContainer from '../ModalContainer';

const FightMonsterModal = ({isModalOpen, setIsModalOpen}) => {
  return ( 
    <ModalContainer
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}>
      <div className="modal">
        <MonsterFighter setIsModalOpen={setIsModalOpen}/>
      </div>
    </ModalContainer>
  );
}
 
export default FightMonsterModal;