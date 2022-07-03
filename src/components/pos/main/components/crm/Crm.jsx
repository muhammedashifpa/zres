import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddCustomers from './components/addCustomers/AddCustomers'
import CrmMain from './components/CrmMain'
import Customers from './components/customers/Customers'

const Crm = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<CrmMain/>}/>
        <Route path='add-customer' element={<AddCustomers/>}/>
        <Route path='customers' element={<Customers/>}/>
      </Routes>
    </>
  )
}

export default Crm