import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../../../../utils/Modal/Modal';

const AccountsMenuModal = () => {
  const navigate = useNavigate();

  const onClose = () => {
    navigate(-1);
  }

  return (
    <>
    <Modal
      title='Accounts'
      onClose={onClose}
      element={<AccountsButtons/>}
    />
    </>
  )
}

export default AccountsMenuModal


const AccountsButtons = () => {
  return(
    <div className='d-flex flex-column py-5'>
    <Link to='masters'   className='btn btn-primary py-3 mb-3'>Masters</Link>
    <Link to='transactions'  className='btn btn-primary py-3 mb-3'>Transactions</Link>
    <Link to='reports'  className='btn btn-primary py-3 mb-3'>Reports</Link>
    <Link to='chart-of-account'  className='btn btn-primary py-3 mb-3'>Chart of Account</Link>
    </div>
  )
}