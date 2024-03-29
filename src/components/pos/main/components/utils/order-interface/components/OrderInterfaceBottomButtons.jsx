import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import Modal from '../../../../../../utils/Modal/Modal';
import { ButtonPopUp } from './orderingInterface/components/ButtonPopUp';

export const OrderInterfaceBottomButtons = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentBtn, setPaymentBtn] = useState(false);
  const [slipcheck, setSlipCheck] = useState(false);

  const closeHandler = () => {
    setModalOpen(false);
  };

  const paymentHandler = () => {
    setModalOpen(true);
    setPaymentBtn(true);
    setSlipCheck(false);
  };

  const SlipCheck = () => {
    setModalOpen(true);
    setSlipCheck(true)
    setPaymentBtn(false);
  }

  return (
    <>
      <Wraper>
        <div className="nav bg-light shadow px-3 py-2 mx-2 mt-3 ">
          <div className="buttons w-100 d-flex ">
            <div className="">
              <button className="btn btn-food px-4 py-2 mx-1">Cancel</button>
              <button onClick={SlipCheck} className="btn btn-beverage px-4 py-2 mx-1 ">Slip Check</button>

              <button className="btn btn-notes px-4 py-2 mx-1"> Loyality</button>
              <button onClick={paymentHandler} className="btn btn-Order px-4 py-2  mx-1">Payment</button>
            </div>
          </div>
        </div>
      </Wraper>
      
      {modalOpen && (
        <Modal
          element={
            <ButtonPopUp
              name={paymentBtn ? "Payment" : slipcheck ? "slip check" : setModalOpen(false)}
            />
          }
          onClose={closeHandler}
        />
      )}
    </>
  );
}

const Wraper = styled.div`
  .nav {
    border-radius: 5px;
    button {
      margin-right: 10px;
      font-size: 12px;
      border-radius: 5px !important;

    }
    .btn-food {
      background: #e1870e;
      color: white;
      border-radius: 15px;
    }
    .btn-beverage {
      background: #31cdd2;

      color: white;
      border-radius: 15px;
    }
    .btn-notes {
      background: #e1870e;

      color: white;
      border-radius: 15px;
    }
    .btn-Order {
      background: #040153;
      color: white;
      border-radius: 15px;
    }
  }
`;