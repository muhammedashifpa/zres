import React from 'react'
import styled from 'styled-components';



const ModalOverlay = (props) => {
  return (
    <ModalOverlayWrapper z_index={props.z_index&&props.z_index} className='card'>
        <button type="button" className="btn-close position-absolute" onClick={props.onClose}></button>
       {props.title&&<h5 className="card-header text-center fw-bold">{props.title}</h5>}
        <div className="card-body overlay-card-body p-3 d-flex justify-content-center">
            {props.children}
        </div>
    </ModalOverlayWrapper>
  )
}

export default ModalOverlay;


const ModalOverlayWrapper = styled.div`
    /* margin-top: 50px; */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:  ${props=>props.z_index?props.z_index:11};
    min-width: 350px;
    text-align: center;
    .btn-close{
        top:10px;
        right: 10px;
    }
`