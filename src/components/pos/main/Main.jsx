import React from 'react'
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import SideBar from './components/main-utils/SideBar';

const Main = () => {
  console.log('SideBar')
  return (
    <MainWrapper className='p-3'>
      <SideBar/>
      <Outlet/>
    </MainWrapper>
  )
}

export default Main

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  column-gap: 1rem;
  height: 100vh;
`