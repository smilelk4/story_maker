import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NewStoryModal from './NewStoryModal';
import swordAnimation from '../../animation/swordAnimation';
import { clearErrors } from '../../store/reducers/errorReducer';

const NewAdventure = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    swordAnimation();
  }, []);

  useEffect(() => {
    dispatch(clearErrors());
  }, [isModalOpen, dispatch])

  return (
    <>
      {isModalOpen && <NewStoryModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} />}
      <h3 
        className="hub__new-adventure title"
        onMouseOver={swordAnimation}
        onClick={() => setIsModalOpen(true)}>
        <p className="hub__new-adventure-svg-container"></p>
        Start a New Adventure
      </h3>
    </>
  );
}
 
export default NewAdventure;