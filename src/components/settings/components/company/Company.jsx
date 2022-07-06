import React from 'react'
import styled from 'styled-components';
import { LeftCompany } from "./components/LeftCompany";
import { RightCompany } from "./components/RightCompany";

const Company = () => {
  return (
    <>
      <Wrapper className="container bg-light p-3 mt-5">
        <h4 className="fs-5 fw-sm">Company Details</h4>

        <form action="" className="col-12 d-flex mx-auto">
          <LeftCompany />
          <RightCompany />
        </form>
      </Wrapper>
    </>
  );
}

export default Company

const Wrapper = styled.div`
  form {
    background: rgba(102, 100, 100, 0.2);
  }
`;