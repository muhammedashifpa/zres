import React from 'react'
import styled from 'styled-components'
import Button from '../../../../../utils/button/Button'
import {GiRoundTable } from 'react-icons/gi'

const Header = () => {
  return (
    <>
    <HeaderWrapper>
        <HeaderLeft>
            <Button className={'btn'} name={'All Tables'} />
            <Button className={'btn'} name={'Main Area'}/>
            <Button className={'btn'} name={'Patio Area'}/>
            <Button className={'btn'} name={'Family Area'}/>
        </HeaderLeft>
        <HeaderRight>
            <Button className={'btn btn-success'} name={'1 Available'}/>
            <Button className={'btn btn-secondary'} name={'2 Occupied'}/>
            <Button name={'3 Done Soon'}/>
            <Button className={'btn btn-warning'} name={'4 Reservation'}/>
            <Button name={'Refresh'}/>
            <GiRoundTable/>
        </HeaderRight>
    </HeaderWrapper>
    </>
  )
}

const HeaderWrapper = styled.div`
display: flex;
padding: 0.5rem;
background-color: #fff;
border-radius: 0.5rem;
box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
`

const HeaderLeft = styled.div`
display: flex;
justify-content: flex-start;
width: 50%;
button {
    margin: 0 0.5rem;
}
`;

const HeaderRight = styled.div`
display: flex;
justify-content: flex-end;
width: 50%;
`;


export default Header