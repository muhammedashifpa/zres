import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CompletedOrders from './components/complete-orders/CompletedOrders'
import Footer from './components/Footer'
import Header from './components/Header'
import RunningOrders from './components/running-orders/RunningOrders'
import Tables from './components/tables/Tables'



const DineIn = () => {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='' element={<Navigate to='tables'/>}/>
          <Route path='tables' element={<Tables/>}/>
          <Route path='running-orders' element={<RunningOrders/>}/>
          <Route path='compleated-orders' element={<CompletedOrders/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default DineIn