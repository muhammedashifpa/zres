import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";

import CollectionInProgress from "./components/homedelvery/CollectionInProgress";
import NewOrder from "./components/homedelvery/NewOrder";
import WaitingForPickup from "./components/homedelvery/WaitingForPickup";
import DeliveryStatus from "./components/homedelvery/DeliveryStatus";
import Nav from "./components/Nav";
import HomeDelevery from "./components/homedelvery/HomeDelevery";

const Dashbord = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(TabData2[0].tabValue);

  const activeTabHandler = (tabValue, path) => {
    setActiveTab(tabValue);
    navigate(path);
  };

  return (
    <div>
      <Nav
        data={TabData2}
        active={activeTab}
        activeTabHandler={activeTabHandler}
      />
      <ContentWrapper className="py-3">
        <Routes>
          <Route path="" element={<HomeDelevery /> }>
            <Route path="neworder" element={<NewOrder />} />
            <Route path="waiting-forpickup" element={<WaitingForPickup />} />
            <Route
              path="collection-in-progress"
              element={<CollectionInProgress />}
            />
            <Route path="delivery-status" element={<DeliveryStatus />} />
          </Route>
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
    tabValue: "home-delivery-orders",
    path: "",
  },
  {
    key: 2,
    name: "Take Away Orders",
    tabValue: "take-away-orders",
    path: "take-away-orders",
  },
  {
    key: 3,
    name: "Future Orders",
    tabValue: "future-orders",
    path: "future-orders",
  },
];
