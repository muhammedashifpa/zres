import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Login from './login/Login';
import Options from './options/Options';

const Pos = () => {
  return (
    <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='pos-options' element={<Options/>}/>
    </Routes>
    
  )
}

export default Pos