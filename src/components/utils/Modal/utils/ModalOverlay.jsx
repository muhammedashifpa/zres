import React from 'react'
import styled from 'styled-components';



const ModalOverlay = (props) => {
  return (
    <>
      <div className="col-4">
        <ModalOverlayWrapper className="">
          <button
            type="button"
            class="btn-close position-absolute"
            onClick={props.onClose}
          ></button>
          {props.title && <h5 class="card-header text-center fw-bold">{props.title}</h5>}
          <div class="card-body text-center">{props.children}</div>
        </ModalOverlayWrapper>
      </div>
    </>
  );
}

export default ModalOverlay;


const ModalOverlayWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    z-index: 11;
    width: 350px;
    .btn-close{
        top:10px;
        right: 10px;
    }
`