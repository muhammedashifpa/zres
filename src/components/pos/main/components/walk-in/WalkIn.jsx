import React from 'react'
import styled from 'styled-components'

const WalkIn = () => {
  return (
    <WalkinOuter className="p-1">
      <div className="nav bg-light p-3 mt-5">
        <div className="buttons w-100 d-flex justify-content-between">
          <div className="">
            <button className="btn btn-food px-4 py-2">
              <img src="/images/walkin/foodbtn.png" className="me-2" alt="" />
              Food
            </button>
            <button className="btn btn-beverage px-4 py-2  me-auto">Beverage</button>
          </div>
          <div className="">
            <button className="btn btn-loyality px-4 py-2  me-auto">Loyality</button>
            <button className="btn btn-notes px-4 py-2  me-auto"> Add Notes</button>
            <button className="btn btn-notes px-4 py-2  me-auto"> Discount</button>
            <button className="btn btn-notes px-4 py-2  me-auto"> Place Order</button>
          </div>
        </div>
      </div>
    </WalkinOuter>
  );
}

export default WalkIn

const WalkinOuter = styled.div`
  background: rgba(102, 100, 100, 0.12);
  height: 100vh;
  border-radius: 20px;
  .nav {
    border-radius: 20px;
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
    .btn-loyality {
      background: #dfa75c;

      color: white;
      border-radius: 15px;
    }
    .btn-notes {
      background: #dfa75c;

      color: white;
      border-radius: 15px;
    }
  }
`;