import React from "react";
import styled from "styled-components";
import Input from "./Input";

const GeneralInformation = (props) => {
  return (
    <>
      <UserDetailsWrapper>
        <h4>General Information</h4>

        <div className="row">
          <Input className="col" label="Name" />
          <Input className="col" label="Phone Number" />
          <Input className="col" label="Alternate Phone" />
          <Input className="col" label="Email" />
        </div>

        <ul className="nav nav-tabs">
          <li onClick={() => props.onDeleveryHandler()} className="nav-item">
            <a href="#" className="nav-link">Delivery</a>
          </li>
          <li onClick={props.onPickupHandler} className="nav-item">
            <a href="#" className="nav-link">Pickup Location</a>
          </li>
        </ul>
      </UserDetailsWrapper>
    </>
  );
};

const UserDetailsWrapper = styled.div`
  width: 100%;
  h4 {
    padding-left: 2px;
    padding-right: 10px;
    padding-bottom: 10px;
    font-size: 13px;
    font-weight: bold;
  }
  ul {
    margin-top: 35px;
    cursor: pointer;
  }
`;

export default GeneralInformation;
