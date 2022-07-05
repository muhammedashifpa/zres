import Button from "../../../../../../utils/button/Button";
import React from "react";
import styled from "styled-components";
import PaginationTable from "../../../../../../utils/table/PaginationTable";

const FutureOrders = () => {
  return (
    <>
      <OrderWrapper>
        <ButtonWrapper>
          <h5>Orders</h5>
          <Button className="btn btn-success " name={"delivery assistant"} />
        </ButtonWrapper>
        <TableWrapper>
          <PaginationTable data={data} columnTitle={columns} />
        </TableWrapper>
      </OrderWrapper>
    </>
  );
};

const columns = [
  { label: "Customer Id", id: "CustomerId" },
  { label: "Customer Name", id: "CustomerName" },
  { label: "Address", id: "Address" },
  { label: "Email ID", id: "EmailId" },
  { label: "Phone", id: "Phone" },
  { label: "Status", id: "Status" },
  { label: "Loyality Customer", id: "LoyalityCustomer" },
];

const data = [
  {
    CustomerId: 1,
    CustomerName: "Shaheer",
    Address: "adsdasdas",
    EmailId: "asdasdasda",
    Phone: "asdasda",
    Status: "active",
    LoyalityCustomer: "true",
  },
  {
    CustomerId: 1,
    CustomerName: "Shaheer",
    Address: "adsdasdas",
    EmailId: "asdasdasda",
    Phone: "asdasda",
    Status: "expired",
    LoyalityCustomer: true,
  },
  {
    CustomerId: 1,
    CustomerName: "Shaheer",
    Address: "adsdasdas",
    EmailId: "asdasdasda",
    Phone: "asdasda",
    Status: "expired",
    LoyalityCustomer: true,
  },
  {
    CustomerId: 1,
    CustomerName: "Shaheer",
    Address: "adsdasdas",
    EmailId: "asdasdasda",
    Phone: "asdasda",
    Status: "expired",
    LoyalityCustomer: true,
  },
];

const OrderWrapper = styled.div`
  padding: 0.5rem 1rem;
`;

const ButtonWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #a59d9d;
  h5 {
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  button{
    width:50%;
    height:50px;
  }
`;
const TableWrapper = styled.div`
  display: block;
`;

export default FutureOrders;
