import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Delivery = () => {
  return (
    <>
      <AddressWrapper>
        <h4>Address</h4>
        <div className="row col g-4">
          <Input className="col-md-3" label="Delivery area" />
          <div className="col-md-3">
            <label className="form-label">Location/Branch</label>
            <select className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <Input className="col-md-3" label="Building/Villa" />
          <Input className="col-md-3" label="Street" />
          <Input className="col-md-3" label=" Flat Number" />
          <Input className="col-md-3" label="Nearest Landmark" />
          <Input className="col-md-3" label="City" />

          <div className="col-md-3">
            <label className="form-label">State</label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
      </AddressWrapper>
    </>
  );
};

const AddressWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  h4 {
    adding-left: 10px;
    padding-right: 10px px;
    padding-bottom: 20px;
    font-size: 13px;
    font-weight: bold;
  }
`;

export default Delivery;
