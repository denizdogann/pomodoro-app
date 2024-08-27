import gearIcon from '../assets/gear-icon.svg'
import styles from './modal.modules.css';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';


function Modal({handleClose,  children}) {
    
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal">
                { children }
                <button className='close-btn' onClick={handleClose}>x</button>
            </div>
        </div>), document.body)
}

export default Modal;