import React from 'react'
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import SideBar from './components/main-utils/SideBar';

const Main = () => {
  return (
    <MainWrapper className=''>
      <SideBar/>
      <OutletWrapper className='p-3 bg-secondary bg-opacity-25'>
        <Outlet/>
      </OutletWrapper>
    </MainWrapper>
  )
}

export default Main

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  /* column-gap: 1rem; */
  height: 100vh;
`
const OutletWrapper = styled.div`
  /* padding: 1rem; */
  overflow-y:scroll;
`