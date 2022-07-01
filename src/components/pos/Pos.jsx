import React from 'react'
import {
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Login from './login/Login';

const Pos = () => {
  return (
    <Routes>
        <Route path='login' element={<Login/>}/>
    </Routes>
    
  )
}

export default Pos