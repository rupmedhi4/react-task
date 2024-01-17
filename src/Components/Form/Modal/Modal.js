import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../Form';
import './Modal.css'

export default function Modal() {
  return ReactDOM.createPortal(
    
      <div className='modal-content'>
        <Form />
      </div>,
    
    document.getElementById("form-modal")
  );
}
