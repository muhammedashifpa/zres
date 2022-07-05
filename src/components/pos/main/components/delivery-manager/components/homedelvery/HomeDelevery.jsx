import React from "react";
import Tabs from "../../../../../../utils/tabs/Tabs";
import { Navigate, Route, Routes } from "react-router-dom";
import NewOrder from "./NewOrder";
import WaitingForPickup from "./WaitingForPickup";
import CollectionInProgress from "./CollectionInProgress";
import DeliveryStatus from "./DeliveryStatus";
import Button from "../../../../../../utils/button/Button";
import styled from "styled-components";
const HomeDelevery = () => {
  return (
    <>
        <Tabwrapper>
        <Tabs data={TabData2} />
        <Button className="btn btn-success " name={"delivery assistant"} />
        </Tabwrapper>
      
      <div id="home-deliver">
        <Routes>
          <Route to="" element={<Navigate to={"new-order"} />} />
          <Route path="new-order" element={<NewOrder />} />
          <Route path="waiting-for-pickup" element={<WaitingForPickup />} />
          <Route
            path="collection-in-progress"
            element={<CollectionInProgress />}
          />
          <Route path="delivery-status" element={<DeliveryStatus />} />
        </Routes>
      </div>
    </>
  );
};

const Tabwrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #a59d9d;
    button{
        width:30%;
        height:50px;
      }
    `;

const TabData2 = [
  {
    key: 1,
    name: "New Order",
    path: "new-order",
  },
  {
    key: 2,
    name: "Waiting for pickup",
    path: "waiting-for-pickup",
  },
  {
    key: 3,
    name: "Collection In Progress",
    path: "collection-in-progress",
  },
  {
    key: 4,
    name: "Delivery Status",
    path: "delivery-status",
  },
];

export default HomeDelevery;
