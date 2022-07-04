import React from 'react'
import styled from 'styled-components'
import DateSelect from './DateSelect'

const OrderTypeAndDurationHeader = () => {
  return (
    <>
    <Wrapper>
      <div className="nav bg-primary shadow px-3 py-2 mx-2">
        <div className="buttons w-100 d-flex justify-content-between align-items-center">
          <div className="">
          <select className="form-select">
            <option value="all-order-type">All Order Type</option>
            <option value="walk-in">Walk in</option>
            <option value="dine-in">Dine in</option>
          </select>
          </div>
          <div className="">
            <DateSelect/>
          </div>
        </div>
      </div>
    </Wrapper>
  </>
  )
}

export default OrderTypeAndDurationHeader

const Wrapper = styled.div`
  .nav {
    border-radius: 5px;
  }
`