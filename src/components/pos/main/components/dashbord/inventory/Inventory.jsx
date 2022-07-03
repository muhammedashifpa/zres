import React from 'react'
import Announcement from '../sales/components/Announcement'
import LowStockIngredients from './components/LowStockIngredients'
import LowStocksFinishedGoods from './components/LowStocksFinishedGoods'
import NoOfCoversServed from './components/NoOfCoversServed'
import StockOnHand from './components/StockOnHand'
import StockTakes from './components/StockTakes'
import TopInventoryModifire from './components/TopInventoryModifire'
import TopPaidModifires from './components/TopPaidModifires'
import TopProfitableItems from './components/TopProfitableItems'
import TotalCogs from './components/TotalCogs'
import TotalPurchase from './components/TotalPurchase'
import WastageCost from './components/WastageCost'

const Inventory = () => {
  return (
    <div className='container'>
      {/* *********************** row ************************ */}
      <div className="row my-3">
        <div className="col-4">
          <StockOnHand/>
        </div>
        <div className="col-4 px-0">
          <WastageCost/>
        </div>
        <div className="col-4 ">
          <TotalCogs/>
        </div>
      </div>
      {/* ------------------------ row ------------------------ */}
      
      {/* *********************** row ************************ */}
      <div className="row my-3">
        <div className="col-4">
          <TotalPurchase/>
        </div>
        <div className="col-4 px-0">
          <StockTakes/>
        </div>
        <div className="col-4 ">
          <LowStocksFinishedGoods/>
        </div>
      </div>
      {/* ------------------------ row ------------------------ */}
            {/* *********************** row ************************ */}
      <div className="row my-3">
        <div className="col-4  ">
          <TopProfitableItems/>
        </div>
        <div className="col-8  ">
          <div className="row mb-2">
            <div className="col-6 px-0 ">
              <LowStockIngredients/>
            </div>
            <div className="col-6 ">
              <TopInventoryModifire/>
            </div>
          </div>
          <div className="row">
            <div className="col-6 px-0  ">
              <NoOfCoversServed/>
            </div>
            <div className="col-6  ">
            <TopPaidModifires/>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------ row ------------------------ */}
    </div>
  )
}

export default Inventory