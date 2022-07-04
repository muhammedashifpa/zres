import React from 'react'
import Announcement from './components/Announcement'
import CancelledOrders from './components/CancelledOrders'
import ChartofSales from './components/ChartofSales'
import MainGraph from './components/graphs/MainGraph'
import HourlyBreakDownReport from './components/HourlyBreakDownReport'
import ModificationandReprint from './components/ModificationandReprint'
import OrderByLocation from './components/OrderByLocation'
import SalesByLocation from './components/SalesByLocation'
import StaffWiseReport from './components/StaffWiseReport'
import TopGrossingItems from './components/TopGrossingItems'
import TopSellingItem from './components/TopSellingItem'
import TotalOrders from './components/TotalOrders'
import TotalSales from './components/TotalSales'

const Sales = () => {
  return (
      <div className='container'>
        {/* *********************** row ************************ */}
        <div className="row my-3">
          <div className="col-12  ">
            <MainGraph/>
          </div>
        </div>
        {/* ------------------------ row ------------------------ */}

        {/* *********************** row ************************ */}
        <div className="row my-3">
          <div className="col-4">
            <Announcement/>
          </div>
          <div className="col-4 ">
            {/* ****** row ****** */}
            <div className='row mb-3'>
              <TotalSales/>
            </div>
            {/* ------ row ------ */}

            {/* ****** row ****** */}
            <div className='row'>
              <ModificationandReprint/>
            </div>
            {/* ------ row ------ */}
          </div>
          <div className="col-4 ">
            <ChartofSales/>
          </div>
        </div>
        {/* ------------------------ row ------------------------ */}

        {/* *********************** row ************************ */}
        <div className="row my-3">
          <div className="col-4">
            <OrderByLocation/>
          </div>
          <div className="col-4 px-0">
            <TopSellingItem/>
          </div>
          <div className="col-4 ">
            <SalesByLocation/>
          </div>
        </div>
        {/* ------------------------ row ------------------------ */}

        {/* *********************** row ************************ */}
        <div className="row my-3">
          <div className="col-4">
            <StaffWiseReport/>
          </div>
          <div className="col-4 ">
            {/* ****** row ****** */}
            <div className='row mb-3'>
              <HourlyBreakDownReport/>
            </div>
            {/* ------ row ------ */}

            {/* ****** row ****** */}
            <div className='row mb-3'>
              <CancelledOrders/>
            </div>
            {/* ------ row ------ */}
            {/* ****** row ****** */}
            <div className='row'>
              <TotalOrders/>
            </div>
            {/* ------ row ------ */}
          </div>
          <div className="col-4 ">
            <TopGrossingItems/>
          </div>
        </div>
        {/* ------------------------ row ------------------------ */}
      </div>
  )
}

export default Sales

