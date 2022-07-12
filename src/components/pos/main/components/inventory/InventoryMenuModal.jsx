import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../../../../utils/Modal/Modal'
import styled from 'styled-components';


const InventoryMenuModal = () => {
    const navigate = useNavigate();
    const onClose = () => {
        navigate(-1)
    }
  return (
    <>
    <Modal
        title={'Inventory'}
        onClose={onClose}
        element={<InventoryMenuButtons/>}
    />
    </>
  )
}

export default InventoryMenuModal



const InventoryMenuButtons = () => {
    return(
        <Wrapper className='d-flex flex-column p-5'>
            <Link className='btn btn-primary py-3  mb-3' to='master'>Master</Link>
            <Link className='btn btn-primary py-3  mb-3' to='master'>Transaction</Link>
            <Link className='btn btn-primary py-3  mb-3' to='master'>Menu Management</Link>
            <Link className='btn btn-primary py-3  mb-3' to='master'>Recipe Management</Link>
            <Link className='btn btn-primary py-3  mb-3' to='master'>Reports</Link>
        </Wrapper>

    )
};

const Wrapper = styled.div`
  .btn{
    min-width: 250px;
  }
`