import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Login from './login/Login';
import Accounts from './main/components/accounts/Accounts';
import Crm from './main/components/crm/Crm';
import Dashbord from './main/components/dashbord/Dashbord';
import DeliveryManagement from './main/components/delivery-manager/DeliveryManagement';
import DineIn from './main/components/dine-in/DineIn';
import Inventory from './main/components/inventory/Inventory';
import WalkIn from './main/components/walk-in/WalkIn';
import Main from './main/Main';
import Options from './options/Options';

const Pos = () => {
  return (
    <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='options' element={<Options/>}/>
        <Route path='main' element={<Main/>}>
          <Route path='dashbord/*' element={<Dashbord/>}/>
          <Route path='walk-in' element={<WalkIn/>}/>
          <Route path='dine-in/*' element={<DineIn/>}/>
          <Route path='crm/*' element={<Crm/>}/>
          <Route path='delivery-management/*' element={<DeliveryManagement/>}/>
          <Route path='invetory/*' element={<Inventory/>}/>
          <Route path='accounts/*' element={<Accounts/>}/>
        </Route>
    </Routes>
    
  )
}

export default Pos;
