import React from 'react'
import Nav from './Nav'
import {Routes,Route,Navigate} from 'react-router-dom'
import HomeDelevery from './homedelvery/HomeDelevery'
import TakeAwayOrders from './take-away-orders/TakeAwayOrders'
import FutureOrders from './future-orders/FutureOrders'

const DeliveryManagementMain = () => {
  return (
    <>
        <Nav
        data={TabData2}
        />
        <div className="py-3">
            <Routes>
                <Route path="" element={<Navigate to='home-delivery-orders' />} />
                <Route path='home-delivery-orders/*' element={<HomeDelevery />} />
                <Route path="take-away-orders/*" element={<TakeAwayOrders />} />
                <Route path="future-orders" element={<FutureOrders/> } />
            </Routes>
        </div>
    </>
  )
}

export default DeliveryManagementMain



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
  