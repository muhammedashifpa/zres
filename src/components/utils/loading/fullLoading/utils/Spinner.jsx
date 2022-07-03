import React from 'react'
import styled from 'styled-components';


const Spinner = () => {
  return (
    <ModalOverlayWrapper>
        <div className="spinner-border text-primary" role="status" style={{width: '5rem', height: '5rem'}}>
            <span className="visually-hidden" >Loading...</span>
        </div>
    </ModalOverlayWrapper>
  )
}

export default Spinner


const ModalOverlayWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    z-index: 11;
    .btn-close{
        top:10px;
        right: 10px;
    }
`