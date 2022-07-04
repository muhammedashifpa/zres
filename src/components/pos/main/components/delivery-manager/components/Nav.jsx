import React from 'react'
import styled from "styled-components";
import Tabs from '../../../../../utils/tabs/Tabs';
import Button from '../../../../../utils/button/Button';

const Nav = (props) => {
  return (
    <NavWrapper>
      <h3>November 13 2021</h3>
      <Tabs data={props.data} active={props.active} activeTabHandler={props.activeTabHandler} />
      <Button name={'Place an order'} />
      <h5>10:26:30 AM</h5>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: rgb(191 191 191);
  border-radius: 5px;
  h3 {
    font-size: 15px;
  }
  h5{
    font-size: 10px;
  }
  `;

export default Nav