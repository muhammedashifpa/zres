import React from 'react'
import styled from 'styled-components';



const ModalOverlay = (props) => {
  return (
    <ModalOverlayWrapper className='card'>
        <button type="button" class="btn-close position-absolute" onClick={props.onClose}></button>
       {props.title&&<h5 class="card-header text-center fw-bold">{props.title}</h5>}
        <div class="card-body px-5">
            {props.children}
        </div>
    </ModalOverlayWrapper>
  )
}

export default ModalOverlay;


const ModalOverlayWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    z-index: 11;
    min-width: 350px;
    .btn-close{
        top:10px;
        right: 10px;
    }
`