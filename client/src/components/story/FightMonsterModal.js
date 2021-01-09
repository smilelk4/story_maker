import React from 'react';
import MonsterFighter from './MonsterFighter';
import ModalContainer from '../ModalContainer';

const FightMonsterModal = ({isModalOpen, setIsModalOpen}) => {
  return ( 
    <ModalContainer
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}>
      <MonsterFighter setIsModalOpen={setIsModalOpen}/>
    </ModalContainer>
  );
}
 
export default FightMonsterModal;