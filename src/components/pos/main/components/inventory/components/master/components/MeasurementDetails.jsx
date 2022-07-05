import React from "react";
import { AiFillFileAdd, AiFillEdit, AiFillDelete } from "react-icons/ai";
import PaginationTable from "../../../../../../../utils/table/PaginationTable";

const MeasurementDetails = () => {
  const columns = [
    { label: "Unit Code", id: "UnitCode" },
    { label: "Unit", id: "Unit" },
    { label: "Unit Symbol", id: "UnitSymbol" },
    { label: "Description", id: "Description" },
  ];

  const data = [
    {
      UnitCode: 1,
      Unit: "Shaheer",
      UnitSymbol: "adsdasdas",
      Description: "asdasdasda",
    },
    {
      UnitCode: 1,
      Unit: "Shaheer",
      UnitSymbol: "adsdasdas",
      Description: "asdasdasda",
    },
    {
      UnitCode: 1,
      Unit: "Shaheer",
      UnitSymbol: "adsdasdas",
      Description: "asdasdasda",
    },
    {
      UnitCode: 1,
      Unit: "Shaheer",
      UnitSymbol: "adsdasdas",
      Description: "asdasdasda",
    },
    {
      UnitCode: 1,
      Unit: "Shaheer",
      UnitSymbol: "adsdasdas",
      Description: "asdasdasda",
    },
    {
      UnitCode: 1,
      Unit: "Shaheer",
      UnitSymbol: "adsdasdas",
      Description: "asdasdasda",
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
          <h5 className="mt-4">Measurement Details</h5>
          <PaginationTable columnTitle={columns} data={data}></PaginationTable>
        </div>
      </div>
    </>
  );
};

export default MeasurementDetails;
