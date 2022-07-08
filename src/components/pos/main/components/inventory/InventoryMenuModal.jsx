import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../../../../utils/Modal/Modal'

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
        <div className='row'>
        <Link className='btn btn-primary btn-sm' to='master'>Master</Link>
        <Link className='btn btn-primary btn-sm mt-1' to='master'>Transaction</Link>
        <Link className='btn btn-primary btn-sm mt-1' to='master'>Menu Management</Link>
        <Link className='btn btn-primary btn-sm mt-1' to='master'>Recipe Management</Link>
        <Link className='btn btn-primary btn-sm mt-1' to='master'>Reports</Link>
        </div>

    )
}