import React from "react";
import PaginationTable from "../../../../../../utils/table/PaginationTable";

const Customers = () => {
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

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div
          style={{
            width: "90%",
            height: "55px",
            backgroundColor: "#d3d3d3",
          }}
          class="border rounded-4 "
        >
          <h6 className="mt-3 ms-3">
            <strong>Customer Details</strong>{" "}
          </h6>
        </div>
      </div>
      <div>
        <PaginationTable columnTitle={columns} data={data} />
      </div>
    </div>
  );
};

export default Customers;
