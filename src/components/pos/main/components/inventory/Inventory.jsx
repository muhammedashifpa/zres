import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Master from './components/master/Master'
import MenuManagement from './components/menu-management/MenuManagement'
import RecipeManagement from './components/recipe-management/RecipeManagement'
import Reports from './components/reports/Reports'
import Transaction from './components/transaction/Transaction'
import InventoryMenuModal from './InventoryMenuModal'

const Inventory = () => {
  return (
    <Routes>
      <Route path='' element={<InventoryMenuModal/>}/>
      <Route path='master' element={<Master/>}/>
      <Route path='transaction' element={<Transaction/>}/>
      <Route path='menu-management' element={<MenuManagement/>}/>
      <Route path='recipe-management' element={<RecipeManagement/>}/>
      <Route path='reports' element={<Reports/>}/>
    </Routes>
  )
}

export default Inventory