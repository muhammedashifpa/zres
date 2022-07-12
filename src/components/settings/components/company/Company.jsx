import React from 'react'
import styled from 'styled-components';
import Button from '../../../utils/button/Button';
import { LeftCompany } from "./components/LeftCompany";
import { RightCompany } from "./components/RightCompany";

const Company = () => {
  return (
    <>
      <Wrapper className="container-fluid bg-light p-4">
        <h4 className="fs-5 fw-sm">Company Details</h4>
        <form action="" className="row mx-auto px-5">
          <LeftCompany />
          <RightCompany />
          <div className="col-12 text-end my-5 p">
            <Button name="save" className="btn btn-success py-2 mx-2" />
            <Button name="Delete" className="btn btn-danger py-2 mx-2" />
            <Button name="Clear" className="btn btn-warning py-2 mx-2" />
            <Button name="Close" className="btn btn-primary py-2 mx-2" />
          </div>
        </form>
        <div className="row"></div>
      </Wrapper>
    </>
  );
}

export default Company

const Wrapper = styled.div`
  form {
    background: rgba(102, 100, 100, 0.2);
    .btn{
      min-width: 150px;
    }
  }
`;