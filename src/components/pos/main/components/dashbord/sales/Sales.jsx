import React from 'react'
import styled from 'styled-components'
import OrderTypeAndDurationHeader from '../utils/OrderTypeAndDurationHeader'
import Announcement from './components/Announcement'
import ChartofSales from './components/ChartofSales'
import MainGraph from './components/graphs/MainGraph'
import ModificationandReprint from './components/ModificationandReprint'
import TotalSales from './components/TotalSales'

const Sales = () => {
  return (
    <SalesWrapper>
      <OrderTypeAndDurationHeader/>
      <GridWrapper className='container'>
        <div class="row my-3">
          <div class="col-12  ">
            <MainGraph/>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-4">
            <Announcement/>
          </div>
          <div class="col-4 ">
            <div className='row mb-3'>
              <TotalSales/>
            </div>
            <div className='row'>
              <ModificationandReprint/>
            </div>
          </div>
          <div class="col-4 ">
            <ChartofSales/>
          </div>
        </div>
      </GridWrapper>

    </SalesWrapper>
  )
}

export default Sales

const SalesWrapper = styled.div`
  
`

const GridWrapper = styled.div`

`