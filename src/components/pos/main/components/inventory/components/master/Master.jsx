import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Tabs from "../../../../../../utils/tabs/Tabs";
import CategoryMaster from "./components/CategoryMaster";
import MeasurementDetails from "./components/MeasurementDetails";
import ProductMaster from "./components/ProductMaster";
import TaxMaster from "./components/TaxMaster";

const Master = () => {
  const TabData = [
    {
      key: 1,
      name: "Product Master",
      path: "product-master",
    },
    {
      key: 2,
      name: "Category Master",
      path: "category-master",
    },
    {
      key: 3,
      name: "Measurement Details",
      path: "measurement-details",
    },
    {
      key: 4,
      name: "Tax Master",
      path: "tax-master",
    },
  ];

  return (
    <>
     
     <Tabs data={TabData}></Tabs>
      <Routes>
        <Route path="product-master" element={<ProductMaster/>}  />
        <Route path="category-master" element={<CategoryMaster/>}  />
        <Route path="measurement-details" element={<MeasurementDetails/>}  />
        <Route path="tax-master" element={<TaxMaster/>}  />
       
      </Routes>
    </>
  );
};

export default Master;
