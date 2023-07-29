import { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Modal.scss";
const Modal = ({ OpenModal }) => {
  const modal = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(!isOpen);
    modal.current.style.display = "none";
  };
  if (OpenModal) {
    setIsOpen(!isOpen);
    modal.current.style.display = "flex";
  }
  return (
    <div className="modal-container" ref={modal}>
      <div className="modal">
        <div className="header">
          <span>Add New Task</span>
          <span onClick={closeModal} className="close">
            X
          </span>
        </div>
        <div className="modal-body">
          <input type="text" placeholder="Enter Title" />
          <input type="text" placeholder="Enter Description" />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
    OpenModal: PropTypes.bool,
  };


export default Modal;
