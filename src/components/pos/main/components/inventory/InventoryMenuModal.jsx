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
        <Link className='btn btn-primary' to='master'>master</Link>
    )
}