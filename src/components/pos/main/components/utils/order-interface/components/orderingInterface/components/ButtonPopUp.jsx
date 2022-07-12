import React from 'react'
import { useState } from 'react';
import Button from '../../../../../../../../utils/button/Button';
import Modal from '../../../../../../../../utils/Modal/Modal';
import { SlipCheck } from '../../SlipCheck/SlipCheck';
import { PaymentRedeem } from '../../paymentRedeem/PaymentRedeem';


export const ButtonPopUp = ({ name }) => {
  // const [redeem, SetRedeem] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
   
  const closeHandler = () => {
    setModalOpen(false);
  };

 

  
  
  return (
    <>
      <div>
        <h5 className="mb-3">{name}</h5>
        {console.log(name)}
        {name === "Discount" ? (
          <div>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter the discount amount"
            />
            <Button name={"Apply"} className="btn-primary" />
          </div>
        ) : name === "Order Successfull" ? (
          <div>
            <p>Thank you so much for your order.</p>
            <Button name={"OK"} className="btn-primary" />
          </div>
        ) : name === "Payment" ? (
          <div className="my-3">
            {/* <p className="text-danger fs-6 my-5">
              Do you want to redeem your Loyalty points in this transaction?
            </p>
            <button onClick={RedeemHandler} className="btn btn-outline-danger me-2">
              Yes
            </button>
            <button className="btn btn-outline-danger ms-2">No</button> */}
                <PaymentRedeem  />
          </div>
        ) : (
          ""
        )}
        {name === "slip check" ? <SlipCheck /> : "" }
        
      </div>
      {/* modal for payment loyality redeem */}
      {modalOpen && (
        <Modal onClose={closeHandler} element={name === "Payment" ? <PaymentRedeem /> : false} />
      )}
    </>
  );
};
