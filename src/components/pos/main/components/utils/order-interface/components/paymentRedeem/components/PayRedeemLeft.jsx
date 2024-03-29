import React from 'react'

import Button from '../../../../../../../../utils/button/Button';
import { BsCalculatorFill } from "react-icons/bs";
import styled from 'styled-components';

export const PayRedeemLeft = () => {
  return (
    <>
      <div className="left col-6 p-2">
        <TotalAmount className="firstbox shadow text-center py-4 bg-light">
          <p>Total Amount</p>
          <h1>0</h1>
        </TotalAmount>
        <div className="buttons text-center my-3">
          <Button name="Cash" className="bg-primary mx-1" />
          <Button name="Credit Card" className="bg-primary mx-1" />
          <Button name="Mobile Pay" className="bg-primary mx-1" />
        </div>
        <Calculate className="calculate bg-light shadow d-flex justify-content-between align-items-center px-4 py-3">
          <BsCalculatorFill />
          <input type="number" />
        </Calculate>
        <hr />
        <Footer className="footer bg-light d-flex justify-content-between align-items-end px-4 py-3">
          <p>Walk in</p>
          <div>
            <Button name="Back" className="bg-danger mx-2" />
            <Button name="Pay" className="bg-info mx-2" />
          </div>
        </Footer>
      </div>
    </>
  );
}

const TotalAmount = styled.div`
  border-radius: 20px;
`
const Calculate = styled.div`
  border-radius: 20px;
`
const Footer = styled.div`
  border-radius: 20px;
`;