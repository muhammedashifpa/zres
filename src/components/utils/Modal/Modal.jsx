import React from 'react'
import Backdrop from './utils/Backdrop'
import  ReactDOM from 'react-dom';
import ModalOverlay from './utils/ModalOverlay';
import { OrderOption } from '../../pos/options/components/OrderOption';

const Modal = (props) => {
  return (
    <>
        {props.open&&ReactDOM.createPortal(
            <Backdrop onClose={props.onClose} />,
            document.getElementById('backdrop-root')
        )}
        {props.open&&ReactDOM.createPortal(
            <ModalOverlay
            onClose={props.onClose}
            >
               <OrderOption classname="text-center" />
            </ModalOverlay>,
            document.getElementById('overlay-root')
        )}
    </>
  )
}

export default Modal

