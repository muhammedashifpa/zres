import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GeneralInformation from "./components/GeneralInformation";
import Delivery from "./components/Delivery";
import Pickup from "./components/Pickup";
import Button from "../../../../../../utils/button/Button"

const AddCustomers = () => {
  const [deliverytab, setDeliverytab] = React.useState(true);
  const [pickuptab, setPickuptab] = React.useState(false);
  const delveryhandler = () => {
    setDeliverytab(true);
    setPickuptab(false);
  };
  const pickuphandler = () => {
    setDeliverytab(false);
    setPickuptab(true);
  };
  const formsubmitHandler = (event) => {
    event.preventDefault()
    console.log(event)
    // console.log(event.target.elements.name.value);
  }
  return (
    <>
      <AddCustomerWrapper onSubmit={formsubmitHandler} >
        <Header
          title={"Create New Customer"}
        />
        <GeneralInformation
          onDeleveryHandler={delveryhandler}
          onPickupHandler={pickuphandler}
        />
        {deliverytab && (
          <>
            <Delivery />
            <ButtonWrapper>
              <Button className='btn btn-secondary' name='cancel'/>
              <Button type='submit' className='btn btn-primary' name='save'/>
            </ButtonWrapper>
          </>
        )}
        {pickuptab && <Pickup />}
      </AddCustomerWrapper>
    </>
  );
};

const AddCustomerWrapper = styled.form`
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
  display: flex;
  color: #4b4a5a;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content:flex-end;
  padding : 10px;
  margin-top: 10px;
  button {
    margin-right: 10px;
  }
  `;
export default AddCustomers;
