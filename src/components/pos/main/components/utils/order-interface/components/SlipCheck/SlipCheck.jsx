import React from 'react'
import styled from 'styled-components';

export const SlipCheck = () => {
  return (
    <>
      <Div className="col-12 p-2">
        <div className="d-flex justify-content-between mb-2">
          <h5>Split check</h5>
          <p>25/11/2021 9:10:36 AM</p>
        </div>
        <MiddleWrapper className="col-8">
          <div className="d-flex justify-content-between px-2">
            <h6>458</h6>
            <h6>$0</h6>
          </div>
        </MiddleWrapper>
        <div className="nav mx-2 mt-5">
          <div className="buttons w-100 d-flex justify-content-between px-3">
            <div className="">
              <button className="btn btn-food px-4 py-2 mx-1">Add Check</button>
              <button className="btn btn-beverage px-4 py-2 mx-1 ">Share Check</button>

              <button className="btn btn-notes px-4 py-2 mx-1"> Clear Check</button>
              <button className="btn btn-Order px-4 py-2  mx-1">Remove Check</button>
            </div>
            <div className="">
              <button className="btn btn-notes px-4 py-2 mx-1">Cancel</button>
              <button className="btn btn-Order px-4 py-2  mx-1">Save</button>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
}

const Div = styled.div`
  background-color: #ccccdc;
  width: 1000px;
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

const MiddleWrapper = styled.div`
  border: 1px solid;
  background: #d3d3d3;
  height: 280px;
  overflow-y: scroll;
  div {
    background: #ccccdc;
  }
`;