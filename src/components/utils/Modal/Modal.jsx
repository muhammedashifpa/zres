import React from 'react'
import Backdrop from './utils/Backdrop'
import  ReactDOM from 'react-dom';
import ModalOverlay from './utils/ModalOverlay';

const Modal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(
            <Backdrop onClose={props.onClose} />,
            document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
            <ModalOverlay
            onClose={props.onClose}
            title={props.title}
            >
               {/* <OrderOption classname="text-center" /> */}
               {props.element}
            </ModalOverlay>,
            document.getElementById('overlay-root')
        )}
    </>
  )
}

export default Modal

