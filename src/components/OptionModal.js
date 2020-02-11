import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal // These two props are required for it to work
    isOpen={!!props.selectedOption} //!! for boolean
    onRequestClose={props.handleSelectedOption}
    ariaHideApp={false} 
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleSelectedOption}>Okay!</button>
  </Modal>
);
export default OptionModal;
