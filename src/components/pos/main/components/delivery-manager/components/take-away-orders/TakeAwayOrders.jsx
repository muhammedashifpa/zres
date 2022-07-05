import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Tabs from "../../../../../../utils/tabs/Tabs";
import WaitingForCollection from "./components/WaitingForCollection";
import Collected from "./components/Collected";
import styled from "styled-components";
import Button from "../../../../../../utils/button/Button";

const TakeAwayOrders = () => {
  return (
    <>
        <Tabwrapper>
        <Tabs data={TabData} />
        <Button className="btn btn-success " name={"delivery assistant"} />
        </Tabwrapper>
      <div id="take-away-orders">
        <Routes>
          <Route to="" element={<Navigate to={"waiting-for-collection"} />} />
          <Route path="waiting-for-collection" element={<WaitingForCollection />} />
          <Route path="collection" element={<Collected />} />
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

const TabData = [
  {
    key: 1,
    name: "Waiting for collection",
    path: "waiting-for-collection",
  },
  {
    key: 2,
    name: "Collection",
    path: "collection"
  }
]

export default TakeAwayOrders;
