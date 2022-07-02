import React from 'react'
import styled from 'styled-components';

const OrderTaking = true;

export const OrderOptionForModal = () => {
  return (
    <OrderOptions>
      {!OrderTaking === true ? (
        <>
          {/* <h5 className="">Order Taking Options</h5> */}
          <div className="buttons mt-3">
            <button type="button" className="btn btn-warning d-block mx-auto my-1">
              Existing Check
            </button>
            <button type="button" className="btn btn-warning d-block mx-auto my-1">
              New Check
            </button>
            <button type="button" className="btn btn-success d-block mx-auto my-1">
              Walk-In
            </button>
            <button type="button" className="btn btn-success d-block mx-auto my-1">
              Dine-In
            </button>
            <button type="button" className="btn btn-success d-block mx-auto my-1">
              Take Away
            </button>
            <button type="button" className="btn btn-danger d-block mx-auto my-1">
              Delivery
            </button>
          </div>
        </>
      ) : (
        <>
          {/* <h5 className="">Main Options</h5> */}
          <div className="buttons mt-3">
            <button type="button" className="btn btn-warning d-block mx-auto my-1">
              Inventory
            </button>
            <button type="button" className="btn btn-warning d-block mx-auto my-1">
              CRM
            </button>
            <button type="button" className="btn btn-primary d-block mx-auto my-1">
              Accounts
            </button>
          </div>
        </>
      )}
    </OrderOptions>
  );
}

const OrderOptions = styled.div`
  /* height: 400px;
  background: white;
  border-radius: 20px;
  padding-top: 50px;
  box-shadow: 0px 0px 6px 0px rgba(151, 146, 146, 0.75);
  h5 {
    color: #040153;
    margin-bottom: 30px;
  }
  button {
    color: black;
    width: 200px;
  }
  button:hover {
    color: white;
  } */
`;