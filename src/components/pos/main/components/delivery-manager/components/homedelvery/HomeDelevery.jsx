import React from 'react'
import Tabs from '../../../../../../utils/tabs/Tabs'
import {  useNavigate } from "react-router-dom";

const HomeDelevery = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = React.useState(TabData2[0].tabValue);
  
    const activeTabHandler = (tabValue, path) => {
      setActiveTab(tabValue);
      navigate(path);
    };
  return (
    <div>
       <Tabs data={TabData2}
        active={activeTab}
        activeTabHandler={activeTabHandler}  />
    </div>
  )
}

const TabData2 = [
    {
      key: 1,
      name: "New Order",
      tabValue: "neworder",
      path: "neworder",
    },
    {
      key: 2,
      name: "Waiting for pickup",
      tabValue: "waiting-forpickup",
      path: "waiting-forpickup",
    },
    {
      key: 3,
      name: "Collection In Progress",
      tabValue: "collection-in-progress",
      path: "collection-in-progress",
    },
    {
      key: 4,
      name: "Delivery Status",
      tabValue: "delivery-status",
      path: "delivery-status",
    },
  ];

export default HomeDelevery