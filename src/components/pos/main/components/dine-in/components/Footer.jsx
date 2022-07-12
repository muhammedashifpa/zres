import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../../../utils/button/Button'

const Footer = () => {
  return (
    <Wrapper>
        <HeaderLeft>
            <Button name='Cancel' className='px-5' />
        </HeaderLeft>

        <HeaderRight>
            <Link to='' className='btn btn-primary'>Running Order</Link>
            <Link to='' className='btn btn-primary'>Completed Order</Link>
            <Link to='' className='btn btn-warning'>Resrvation booking</Link>
        </HeaderRight>
        
    </Wrapper>
  )
}

export default Footer


const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
  justify-content: space-between;
`

const HeaderLeft = styled.div`
    margin-left: 2rem;
`;

const HeaderRight = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin-right: 2rem;
`;
