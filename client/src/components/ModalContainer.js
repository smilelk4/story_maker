import React from 'react';
import Modal from "react-modal";

const ModalContainer = ({isModalOpen, setIsModalOpen, children}) => {
  return ( 
    <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="New Adventure Modal"
        className="modal"
        overlayClassName="modal__overlay"
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
      {children}
    </Modal>
  );
}
 
export default ModalContainer;