import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Nav from "./components/Nav";
import HomeDelevery from "./components/homedelvery/HomeDelevery";
import TakeAwayOrders from "./components/take-away-orders/TakeAwayOrders";
import FutureOrders from "./components/future-orders/FutureOrders";

const Dashbord = () => {
 
  return (
    <div>
      <Nav
        data={TabData2}
      />
      <ContentWrapper className="py-3">
        <Routes>
            <Route path="" element={<Navigate to='home-delivery-orders' />} />
            <Route path='home-delivery-orders/*' element={<HomeDelevery />} />
            <Route path="take-away-orders/*" element={<TakeAwayOrders />} />
            <Route path="future-orders" element={<FutureOrders/> } />
        </Routes>
      </ContentWrapper>
    </div>
  );
};

export default Dashbord;

const ContentWrapper = styled.div``;



const TabData2 = [
  {
    key: 1,
    name: "Home Delivery Orders",
    path: "home-delivery-orders",
  },
  {
    key: 2,
    name: "Take Away Orders",
    path: "take-away-orders",
  },
  {
    key: 3,
    name: "Future Orders",
    path: "future-orders",
  },
];
