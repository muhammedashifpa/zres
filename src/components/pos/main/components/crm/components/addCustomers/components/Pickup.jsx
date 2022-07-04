import React from "react";
import styled from "styled-components";

export const Pickup = () => {
  return (
    <>
      <AddressWrapper>
        <h4>Available Pickup Location</h4>
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
export default Pickup;