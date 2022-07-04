import React from 'react'
import Tabs from '../../../../../../utils/tabs/Tabs'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import NewOrder from './NewOrder';
import WaitingForPickup from './WaitingForPickup';
import CollectionInProgress from './CollectionInProgress';
import DeliveryStatus from './DeliveryStatus';

const HomeDelevery = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = React.useState(TabData2[0].tabValue);
  
    const activeTabHandler = (tabValue, path) => {
      setActiveTab(tabValue);
      navigate(path);
    };
  return (
    <>
      <Tabs data={TabData2}
        active={activeTab}
        activeTabHandler={activeTabHandler}  />
      <div id='home-deliver'>
        <Routes>
          <Route to='' element={<Navigate to={'new-order'}/>}/>
          <Route path='new-order' element={<NewOrder/>}/>
          <Route path='waiting-for-pickup' element={<WaitingForPickup/>}/>
          <Route path='collection-in-progress' element={<CollectionInProgress/>}/>
          <Route path='delivery-status' element={<DeliveryStatus/>}/>
        </Routes>
      </div>
    </>
  )
}

const TabData2 = [
    {
      key: 1,
      name: "New Order",
      tabValue: "neworder",
      path: "new-order",
    },
    {
      key: 2,
      name: "Waiting for pickup",
      tabValue: "waiting-forpickup",
      path: "waiting-for-pickup",
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