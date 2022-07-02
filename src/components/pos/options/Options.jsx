import React from 'react'
import styled from 'styled-components'
import OrderTakingOption from './components/OrderTakingOption'
import MainOption from './components/MainOption'
import Modal from '../../utils/Modal/Modal'

const Options = () => {
   
  return (
    <>
      {/* <div>Options</div>
    <OrderTakingOption/>
    <MainOption/> */}

      <div className="p-3">
        <OptionsOuter className="row m-0 flex align-items-center justify-content-evenly">
          <div className="col-3 text-center">
            <OrderTakingOption  />
          </div>
          <div className="col-3 text-center">
            <MainOption />
          </div>
        </OptionsOuter>
      </div>
      <Modal open  />
    </>
  );
}

export default Options


const OptionsOuter = styled.div`
  background: rgba(102, 100, 100, 0.2);
  width: 100%;
  height: 95vh;
  margin: auto;
  border-radius: 10px;
`;