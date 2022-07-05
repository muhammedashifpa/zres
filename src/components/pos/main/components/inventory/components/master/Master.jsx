import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Tabs from "../../../../../../utils/tabs/Tabs";
import ProductMaster from "./components/ProductMaster";

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
        <Route path="/master"  />
       
      </Routes>
    </>
  );
};

export default Master;
