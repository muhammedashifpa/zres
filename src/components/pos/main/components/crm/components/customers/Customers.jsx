import React from "react";
import PaginationTable from "../../../../../../utils/table/PaginationTable";

const Customers = () => {
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
          <h6 className="mt-3 ms-3"><strong>Customer Details</strong> </h6>
        </div>
      </div>
      <div>
        <PaginationTable />
      </div>
    </div>
  );
};

export default Customers;
