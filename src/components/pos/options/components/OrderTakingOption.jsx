import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../../../utils/Modal/Modal';
import { OrderOptionForModal } from './OrderOptionForModal';

const OrderTakingOption = () => {
  const [modalOpen,setModalOpen] = useState();

  const closeHandler = () => {
    setModalOpen(null)
  }

  const openHandler = () => {
    setModalOpen(true)
  }
  return (
    <>
    <OrderOptions onClick={openHandler}>
      <h5 className=''>Order Taking Options</h5>
    </OrderOptions>
      {modalOpen&&<Modal 
      title={'Order Taking Options'}
      element={<OrderOptionForModal options='order-taking-options'/>}
      onClose={closeHandler}
      />}
    </>
  );
}

export default OrderTakingOption

const OrderOptions = styled.div`
  height: 400px;
  background: white;
  border-radius: 20px;
  padding-top: 50px;
  box-shadow: 0px 0px 6px 0px rgba(151, 146, 146, 0.75);
  h5 {
    color: #040153;
  }
`;