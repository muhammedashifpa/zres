import React from 'react'
import  ReactDOM from 'react-dom';
import Backdrop from '../utils/Backdrop';
import ModalOverlay from '../utils/ModalOverlay';

const ModalLevel3 = (props) => {
  return (
    <>
        {ReactDOM.createPortal(
            <Backdrop z_index={33} onClose={props.onClose} />,
            document.getElementById('backdrop-root-level-3')
        )}
        {ReactDOM.createPortal(
            <ModalOverlay
            z_index={34}
            onClose={props.onClose}
            title={props.title}
            >
               {props.element}
            </ModalOverlay>,
            document.getElementById('overlay-root-level-3')
        )}
    </>
  )
}

export default ModalLevel3;