import React from 'react'
import  ReactDOM from 'react-dom';
import Backdrop from '../utils/Backdrop';
import ModalOverlay from '../utils/ModalOverlay';

const ModalLevel2 = (props) => {
  return (
    <>
        {ReactDOM.createPortal(
            <Backdrop z_index={22} onClose={props.onClose} />,
            document.getElementById('backdrop-root-level-2')
        )}
        {ReactDOM.createPortal(
            <ModalOverlay
            z_index={23}
            onClose={props.onClose}
            title={props.title}
            >
               {props.element}
            </ModalOverlay>,
            document.getElementById('overlay-root-level-2')
        )}
    </>
  )
}

export default ModalLevel2;