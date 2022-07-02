import React from 'react'
import styled from 'styled-components'

const OrderTakingOption = () => {
  return (
    <OrderOptions>
      <h5 className=''>Order Taking Options</h5>
      
    </OrderOptions>
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