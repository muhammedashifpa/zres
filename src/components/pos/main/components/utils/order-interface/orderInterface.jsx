import React from 'react'
import styled from 'styled-components'
import { LeftHead } from './components/LeftHead';
import { LeftTable } from './components/LeftTable';
import { OrderInterfaceHeaderButtons } from './components/OrderInterfaceHeaderButtons';
import { LeftOrderBill } from './components/LeftOrderBill';
import { RightSide } from './components/rightSide/RightSide';
import {OrderInterfaceBottomButtons} from './components/OrderInterfaceBottomButtons'

const OrderInterface = () => {
    return (
        <OrderInterfaceOuter className="py-3">
          <OrderInterfaceHeaderButtons />
          <div className="mainSection row d-flex justify-content-between mx-1 mt-2">
            <div className="left col-6 p-2 mt-2">
                <div className=" left bg-light p-4">
                    <LeftHead />
                    <hr />
                    <LeftTable tableData={tableDetails} />
                    <hr />
                    <LeftOrderBill bill={BillDetails} />
                </div>
            </div>
            <div className="right col-6 p-2 mt-2">
                <div className="right bg-light p-4">
                    <RightSide />
                </div>
            </div>
          </div>
          <OrderInterfaceBottomButtons />
        </OrderInterfaceOuter>
      );
}

export default OrderInterface



const OrderInterfaceOuter = styled.div`
  background: rgba(102, 100, 100, 0.12);
  .left ,.right{
    border-radius: 5px;;
  }
`;


const tableDetails = [
  {
    name: "Burger",
    quantity: "3",
    price: 150,
    SubTotal: 500,
  },
  {
    name: "pizza",
    quantity: "3",
    price: 150,
    SubTotal: 500,
  },
  {
    name: "shawarma",
    quantity: "3",
    price: 150,
    SubTotal: 500,
  },
  {
    name: "Pista",
    quantity: "3",
    price: 150,
    SubTotal: 500,
  },
];

const BillDetails = [
  {
    name: "SubTotal",
    count: 500,
    style: "sub"
  },
  {
    name: "Tax",
    count: 4.723,
  },
  {
    name: "Discount",
    count: 10,
  },
  {
    name: "Total",
    count: 496.23,
    style: "total",
  },
];
