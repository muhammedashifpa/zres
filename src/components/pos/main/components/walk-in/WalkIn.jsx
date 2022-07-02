import React from 'react'
import styled from 'styled-components'
import { LeftHead } from './components/LeftHead';
import { LeftTable } from './components/LeftTable';
import { WalkinHeaderButtons } from './components/WalkinHeaderButtons';
import { LeftOrderBill } from './components/LeftOrderBill';
import { RightSide } from './components/rightSide/RightSide';
import {WalkinBottomButtons} from './components/WalkinBottomButtons'

const WalkIn = () => {
  return (
    <WalkinOuter className="p-1">
      <WalkinHeaderButtons />
      <div className="mainSection row d-flex justify-content-between mx-2 mt-2">
        <div className="left col-5 bg-light shadow p-2 mt-2">
          <LeftHead />
          <hr />
          <LeftTable tableData={tableDetails} />
          <hr />
          <LeftOrderBill bill={BillDetails} />
        </div>
        <div className="right col-6 bg-light shadow p-2 mt-2">
          <RightSide />
        </div>
      </div>
      <WalkinBottomButtons />
    </WalkinOuter>
  );
}

export default WalkIn

const WalkinOuter = styled.div`
  background: rgba(102, 100, 100, 0.12);
  height: 100vh;
  border-radius: 20px;
  .left,.right{
    border-radius: 20px;
  }
`;


const tableDetails = [
  {
    name: "jack",
    quantity: "3",
    price: 150,
    SubTotal: 500,
  },
  {
    name: "Jill",
    quantity: "3",
    price: 150,
    SubTotal: 500,
  },
  {
    name: "sumesh",
    quantity: "3",
    price: 150,
    SubTotal: 500,
  },
  {
    name: "ramesh",
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
