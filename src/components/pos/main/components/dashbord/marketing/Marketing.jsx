import React from 'react'
import CancelledItems from './components/CancelledItems';
import DeliveryReports from './components/DeliveryReports';
import InActiveCustomers from './components/InActiveCustomers';
import NewCustomers from './components/NewCustomers';
import NoOfCoversServed from './components/NoOfCoversServed';
import TableWiseSalesReport from './components/TableWiseSalesReport';
import TopComboItems from './components/TopComboItems';
import TopCustomers from './components/TopCustomers';
import TopModifiers from './components/TopModifiers';
import TopPaidModifires from './components/TopPaidModifires';
import TotalDiscount from './components/TotalDiscount';
import TotalSurcharges from './components/TotalSurcharges';
import WhatHappening from './components/WhatHappening';

const Marketing = () => {
  return (
    <div className='container'>
      {/* *********************** row ************************ */}
      <div className="row my-3">
        <div className="col-8  ">
          <div className="row mb-2">
            <div className="col-4  ">
              <CancelledItems/>
            </div>
            <div className="col-4 ps-0 ">
            <NewCustomers/>
            </div>
            <div className="col-4 px-0 ">
            <TotalSurcharges/>
            </div>
          </div>
          <div className="row">
            <div className="col-4  ">
              <TotalDiscount/>
            </div>
            <div className="col-4 ps-0 ">
            <DeliveryReports/>
            </div>
            <div className="col-4 px-0 ">
            <InActiveCustomers/>
            </div>
          </div>
        </div>
        <div className="col-4  ">
          <WhatHappening/>
        </div>
      </div>
      {/* ------------------------ row ------------------------ */}

      {/* *********************** row ************************ */}
      <div className="row my-3">
        <div className="col-4">
          <TopComboItems/>
        </div>
        <div className="col-4 px-0">
          <TopCustomers/>
        </div>
        <div className="col-4 ">
          <TopModifiers/>
        </div>
      </div>
      {/* ------------------------ row ------------------------ */}
      
      {/* *********************** row ************************ */}
      <div className="row my-3">
        <div className="col-4">
          <TableWiseSalesReport/>
        </div>
        <div className="col-4 px-0">
          <NoOfCoversServed/>
        </div>
        <div className="col-4 ">
          <TopPaidModifires/>
        </div>
      </div>
      {/* ------------------------ row ------------------------ */}
    </div>
  )
}

export default Marketing;