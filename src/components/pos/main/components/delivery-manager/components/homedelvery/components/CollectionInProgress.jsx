import React from 'react'
import styled from 'styled-components'
import PaginationTable from '../../../../../../../utils/table/PaginationTable'

const CollectionInProgress = ()=> {
  return (
    <CollectionWrapper>
      <PaginationTable data={data} columnTitle={columns} />
    </CollectionWrapper>
  )
}

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

const CollectionWrapper = styled.div`
  padding: 0.5rem 1rem;
`;

export default CollectionInProgress