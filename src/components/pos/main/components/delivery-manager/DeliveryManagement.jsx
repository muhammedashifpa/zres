import React from "react";
import { Route, Routes } from "react-router-dom";

import OrderInterface from "../utils/order-interface/OrderInterface";
import DeliveryManagementMain from "./components/DeliveryManagementMain";

const Dashbord = () => {
 
  return (
    <Routes>
      <Route path='/*' element={<DeliveryManagementMain/>}/>
      <Route path='new-order' element={<OrderInterface/>}/>
    </Routes>

  );
};

export default Dashbord;

