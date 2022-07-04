import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import { BsFillTagFill, BsPlusLg } from "react-icons/bs";
import Modal from '../../../../../../utils/Modal/Modal';
import { ButtonPopUp } from './orderingInterface/components/ButtonPopUp';

export const OrderInterfaceHeaderButtons = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [discount, setDiscount] = useState(false)
  const [placeOrder, setPlaceOrder] = useState(false);

  const closeHandler = () => {
    setModalOpen(false);  
  };

  const DiscountHandler = () => {
    setModalOpen(true);
    setDiscount(true)
    
    setPlaceOrder(false);
  };

  const placeOrderHandler = () => {
    setModalOpen("true")
    setPlaceOrder(true)
    
    setDiscount(false);
 }
  

  
  return (
    <>
    <Wraper>
      <div className="nav bg-light shadow px-3 py-2 mt-5 mx-2">
        <div className="buttons w-100 d-flex justify-content-between align-items-center">
          <div className="">
            <button className="btn btn-food px-4 py-2">
              <img src="/images/walkin/foodbtn.png" className="me-2" height={"16px"} alt="" />
              Food
            </button>
            <button className="btn btn-beverage px-4 py-2  ">Beverage</button>
          </div>
          <div className="">
            <button className="btn btn-notes px-4 py-2 ">
              <BsFillTagFill className="me-2" /> Add Notes
            </button>
            <button onClick={DiscountHandler} className="btn btn-Discount px-4 py-2  ">
              <BsPlusLg className="me-2" /> Discount
            </button>
            <button onClick={placeOrderHandler} className="btn btn-Order px-5 py-2  ">
              {" "}
              Place Order
            </button>
          </div>
        </div>
      </div>
    </Wraper>
      {modalOpen && (
        <Modal
          element={
            <ButtonPopUp
              name={discount ? "Discount" : placeOrder ? "Order Successfull" : setModalOpen(false)}
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
    .btn-Discount {
      background: #31cdd2;

      color: white;
      border-radius: 15px;
    }
    .btn-Order {
      background: #040153;
      font-weight: bold;
      font-size: 16px;
      color: white;
      border-radius: 15px;
    }
  }
`;

