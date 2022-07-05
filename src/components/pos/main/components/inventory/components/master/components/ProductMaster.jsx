import React from "react";
import PaginationTable from "../../../../../../../utils/table/PaginationTable";
import { AiFillFileAdd, AiFillEdit, AiFillDelete } from "react-icons/ai";

const ProductMaster = () => {
  const columns = [
    { label: "Serial No", id: "serialNumber" },
    { label: "Code", id: "Code" },
    { label: "Product", id: "Product" },
    { label: "HSNCode", id: "HSNCode" },
    { label: "Category", id: "Category" },
    { label: "Unit", id: "Unit" },
    { label: "Tax", id: "Tax" },
    { label: "RO Level", id: "ROLevel" },
    { label: "Stock", id: "Stock" },
    { label: "Discount", id: "Discount" },
    { label: "Created By", id: "CreatedBy" },
    { label: "Rack No", id: "RackNo" },
  ];

  const data = [
    {
      serialNumber: 1,
      Code: "Shaheer",
      Product: "adsdasdas",
      HSNCode: "asdasdasda",
      Category: "asdasda",
      Unit: "actissve",
      Tax: "true",
      ROLevel: "assad",
      Stock: "sdaasd",
      Discount: "asdasda",
      CreatedBy: "asdasdas",
      RackNo: "asdasdasdas",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Product: "adsdasdas",
      HSNCode: "asdasdasda",
      Category: "asdasda",
      Unit: "actisssve",
      Tax: "true",
      ROLevel: "assad",
      Stock: "sdaasd",
      Discount: "asdasda",
      CreatedBy: "asdasdas",
      RackNo: "asdasdasdas",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Product: "adsdasdas",
      HSNCode: "asdasdasda",
      Category: "asdasda",
      Unit: "activsse",
      Tax: "true",
      ROLevel: "assad",
      Stock: "sdaasd",
      Discount: "asdasda",
      CreatedBy: "asdasdas",
      RackNo: "asdasdasdas",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Product: "adsdasdas",
      HSNCode: "asdasdasda",
      Category: "asdasda",
      Unit: "activsse",
      Tax: "true",
      ROLevel: "assad",
      Stock: "sdaasd",
      Discount: "asdasda",
      CreatedBy: "asdasdas",
      RackNo: "asdasdasdas",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Product: "adsdasdas",
      HSNCode: "asdasdasda",
      Category: "asdasda",
      Unit: "activssse",
      Tax: "true",
      ROLevel: "assad",
      Stock: "sdaasd",
      Discount: "asdasda",
      CreatedBy: "asdasdas",
      RackNo: "asdasdasdas",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Product: "adsdasdas",
      HSNCode: "asdasdasda",
      Category: "asdasda",
      Unit: "dsdasda",
      Tax: "true",
      ROLevel: "assad",
      Stock: "sdaasd",
      Discount: "asdasda",
      CreatedBy: "asdasdas",
      RackNo: "asdasdasdas",
    },
    {
      serialNumber: 1,
      Code: "Shaheer",
      Product: "adsdasdas",
      HSNCode: "asdasdasda",
      Category: "asdasda",
      Unit: "active",
      Tax: "true",
      ROLevel: "assad",
      Stock: "sdaasd",
      Discount: "asdasda",
      CreatedBy: "asdasdas",
      RackNo: "asdasdasdas",
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
          <h5 className="mt-4">Product Details</h5>
          <PaginationTable columnTitle={columns} data={data}></PaginationTable>
        </div>
      </div>
    </>
  );
};

export default ProductMaster;
