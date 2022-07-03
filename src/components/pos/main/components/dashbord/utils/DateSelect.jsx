import React, { useState } from 'react'
import Button from '../../../../../utils/button/Button'
import styled from 'styled-components'
import CardWrapper from '../sales/components/utils/CardWrapper'
import  ReactDOM from 'react-dom';
import Backdrop from '../../../../../utils/Modal/utils/Backdrop';


const DateSelect = () => {
    const [openSelector,setOpenSelector] = useState(false)

    const closeHandler = () => {
        setOpenSelector(false)
    }

    const openHandler = () => {
        setOpenSelector(true)
    }
  return (
    <>
    <Wrapper>
        <Button onClick={openHandler} className='btn-success' name={'Date from 12/12/2021 to 12/2/2022'}/>
        {openSelector&&
        <DropDown>
            <CardWrapper title='Select date'>
                <div class="row g-3">
                    <div class="col">
                        <label htmlFor="dashbord-date-select-from" class="form-label">From Date</label>
                        <input type="date" class="form-control" id='dashbord-date-select-from' placeholder="First name"/>
                    </div>
                    <div class="col">
                        <label htmlFor="dashbord-date-select-to" class="form-label">To Date</label>
                        <input type="date" class="form-control" id='dashbord-date-select-to' placeholder="11/12/2022" />
                    </div>
                </div>
                <div class="row g-3 mt-4">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <Button className='w-100 btn-outline-danger btn-light' onClick={closeHandler} name='Cancel'/>
                    </div>
                    <div class="col-4">
                        <Button className='w-100 btn-success' name='Apply'/>
                    </div>
                </div>
            </CardWrapper>
        </DropDown>
        }
    </Wrapper>
    {openSelector&&ReactDOM.createPortal(
            <Backdrop onClose={closeHandler} />,
            document.getElementById('backdrop-root')
        )}
    </>
  )
}

export default DateSelect


const Wrapper = styled.div`
    position: relative;
`

const DropDown = styled.div`
    position: absolute;
    width: 600px;
    right: 0;
    top:50px;
    z-index: 20;
`