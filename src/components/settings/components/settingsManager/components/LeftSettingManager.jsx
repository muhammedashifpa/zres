import React from 'react'
import styled from "styled-components";


export const LeftSettingManager = () => {
  return (
    <>
      <Wrapper className="col-4 rounded">
        <select className="form-select my-2" aria-label="Default select example">
          <option defaultValue="">All</option>
          <option value="1">Accounts</option>
          <option value="2">Inventory</option>
          <option value="3">Walk in</option>
          <option value="3">Dine in</option>
          <option value="3">CRM</option>
          <option value="3">Delivery Manager</option>
        </select>
        <div className="d-flex justify-content-between my-3">
          <h6>SINO</h6>
          <h6>Setting Name</h6>
        </div>
        <div className="bg-light mb-2">
          <div className="p-2">
            <h5>Accounts</h5>
            <p>1: show currency in walkin form</p>
            <p>2: View All Checks</p>
            <p>3: Edit Check Before Payment</p>
          </div>
          <div className="p-2">
            <h5>Accounts</h5>
            <p>1: show currency in walkin form</p>
            <p>2: View All Checks</p>
            <p>3: Edit Check Before Payment</p>
          </div>
        </div>
        <div className="div mb-3">
          <input type="search" className="form-control" placeholder="search here" />
        </div>
      </Wrapper>
    </>
  );
}


const Wrapper = styled.div`
  background-color: #c7c6d7;
`;