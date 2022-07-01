import React from 'react'
import Backdrop from './utils/Backdrop'
import  ReactDOM from 'react-dom';
import ModalOverlay from './utils/ModalOverlay';

const Modal = (props) => {
  return (
    <>
        {props.open&&ReactDOM.createPortal(
            <Backdrop onClose={props.onClose} />,
            document.getElementById('backdrop-root')
        )}
        {props.open&&ReactDOM.createPortal(
            <ModalOverlay
            title={'Dine in'}
            onClose={props.onClose}
            >
                {props.component}
            </ModalOverlay>,
            document.getElementById('overlay-root')
        )}
    </>
  )
}

export default Modal

