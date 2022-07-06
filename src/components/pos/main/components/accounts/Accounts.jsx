import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AccountsMenuModal from './AccountsMenuModal'
import ChartOfAccount from './componenets/chart-of-account/ChartOfAccount'
import Masters from './componenets/masters/Masters'
import Reports from './componenets/reports/Reports'
import Transactions from './componenets/transactions/Transactions'

const Accounts = () => {
  return (
    <Routes>
      <Route path='' element={<AccountsMenuModal/>}/>
      <Route path='masters' element={<Masters/>}/>
      <Route path='transactions' element={<Transactions/>}/>
      <Route path='reports' element={<Reports/>}/>
      <Route path='chart-of-account' element={<ChartOfAccount/>}/>
    </Routes>
  )
}

export default Accounts