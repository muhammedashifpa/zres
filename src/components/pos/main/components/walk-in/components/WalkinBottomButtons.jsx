import React from 'react'
import styled from 'styled-components';

export const WalkinBottomButtons = () => {
  return (
    <Wraper>
      <div className="nav bg-light shadow px-3 py-2 mx-2 mt-3 ">
        <div className="buttons w-100 d-flex ">
          <div className="">
            <button className="btn btn-food px-4 py-2 mx-1">Cancel</button>
            <button className="btn btn-beverage px-4 py-2 mx-1 ">Slip Check</button>

            <button className="btn btn-notes px-4 py-2 mx-1"> Loyality</button>
            <button className="btn btn-Order px-4 py-2  mx-1">Payment</button>
          </div>
        </div>
      </div>
    </Wraper>
  );
}

const Wraper = styled.div`
  .nav {
    border-radius: 20px;
    button {
      margin-right: 10px;
      font-size: 12px;
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