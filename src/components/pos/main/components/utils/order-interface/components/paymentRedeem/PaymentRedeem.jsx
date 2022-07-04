import styled from 'styled-components';
import React from 'react'
import { PayRedeemLeft } from './components/PayRedeemLeft';
import { PayRedeemRight } from './components/PayRedeemRight';

export const PaymentRedeem = () => {
  return (
    <Wrapper className="row p-2 d-flex justify-content-between">
      <PayRedeemLeft />
      <PayRedeemRight />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgba(102, 100, 100, 0.12);
  width: 800px;
  height: 100%;
`;