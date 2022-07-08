import React from "react";
import { AiFillFileAdd, AiFillEdit, AiFillDelete } from "react-icons/ai";
import PaginationTable from "../../../../../../../utils/table/PaginationTable";

const TaxMaster = () => {
  const columns = [
    { label: "Serial No", id: "serialNumber" },
    { label: "Code", id: "Code" },
    { label: "Name", id: "Name" },
    { label: "Tax", id: "Tax" },
    { label: "Taxable", id: "Taxable" },
  ];

  const data = [
    {
      serialNumber: 1,
      Code: "Shaheer",
      Name: "adsdasdas",
      Tax: "asdasdasda",
      Taxable: "asdasda",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Name: "adsdasdas",
      Tax: "asdasdasda",
      Taxable: "asdasda",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Name: "adsdasdas",
      Tax: "asdasdasda",
      Taxable: "asdasda",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Name: "adsdasdas",
      Tax: "asdasdasda",
      Taxable: "asdasda",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Name: "adsdasdas",
      Tax: "asdasdasda",
      Taxable: "asdasda",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Name: "adsdasdas",
      Tax: "asdasdasda",
      Taxable: "asdasda",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Name: "adsdasdas",
      Tax: "asdasdasda",
      Taxable: "asdasda",
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-12 ">
          <div className="mt-4 d-flex flex-row-reverse bd-highlight">
            <span className="me-4 text-primary">
              <AiFillDelete size={25} />
              <h6 className="text-black">Delete</h6>
            </span>
            <span className="me-4 text-primary">
              <AiFillEdit size={25} />
              <h6 className="text-black">Edit</h6>
            </span>
            <span className="me-4 text-primary">
              <AiFillFileAdd size={25} />
              <h6 className="text-black">Add</h6>
            </span>
          </div>
        </div>
        <div className="col-12">
          <h5 className="mt-4">Tax Details</h5>
          <PaginationTable columnTitle={columns} data={data}></PaginationTable>
        </div>
      </div>
    </>
  );
};

export default TaxMaster;
