import React from 'react'
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
    <div>Main</div>
    <Outlet/>
    </>
  )
}

export default Main