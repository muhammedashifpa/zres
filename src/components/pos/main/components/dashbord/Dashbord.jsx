import React from 'react'
import { Navigate, Route, Routes,  } from 'react-router-dom'
import styled from 'styled-components'
import Tabs from '../../../../utils/tabs/Tabs'
import BusinessSummary from './business-summary/BusinessSummary'
import Inventory from './inventory/Inventory'
import Marketing from './marketing/Marketing'
import Sales from './sales/Sales'
import OrderTypeAndDurationHeader from './utils/OrderTypeAndDurationHeader'

const Dashbord = () => {

  return (
    <div>
      <Tabs data={TabData}/>
      <ContentWrapper className='py-3'>
        <OrderTypeAndDurationHeader/>
        <Routes>
          <Route  path='' element={<Navigate to='sales'/>}/>
          <Route index path='sales' element={<Sales/>}/>
          <Route path='marketing' element={<Marketing/>}/>
          <Route path='inventory' element={<Inventory/>}/>
          <Route path='business-summary' element={<BusinessSummary/>}/>
        </Routes>
      </ContentWrapper>
    </div>
  )
}

export default Dashbord

const ContentWrapper = styled.div`
  
`


const TabData = [
  {
    key:1,
    name:'Sales',
    tabValue:'sales',
    path:'sales'
  },
  {
    key:2,
    name:'Marketing',
    tabValue:'marketing',
    path:'marketing'
  },
  {
    key:3,
    name:'Inventory',
    tabValue:'inventory',
    path:'inventory'
  },
  {
    key:4,
    name:'Business Summary',
    tabValue:'business_summary',
    path:'business-summary'
  },
]