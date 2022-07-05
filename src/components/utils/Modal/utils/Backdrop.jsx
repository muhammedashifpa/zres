import React from 'react'
import styled from 'styled-components'
const Backdrop = (props) => {
  return (
    <BackdropWrpper z_index={props.z_index&&props.z_index} onClick={props.onClose}/>
  )
}

export default Backdrop


const BackdropWrpper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: ${props=>props.z_index?props.z_index:10};
    background: rgba(0, 0, 0, 0.75);
`