import React from 'react'
import styled from 'styled-components'
import Button from '../../../../../utils/button/Button';
import {NavLink, Link} from 'react-router-dom';

import {GiRoundTable } from 'react-icons'


const Header = (props) => {
  return (
    <>
    <HeaderWrapper>
        <HeaderLeft>
            <Link className={'btn btn-primary'} to='tables/all-table'>{props.allTable} All Table</Link>
            <Link className={'btn btn-primary'} to='tables/main-area'>{props.mainArea} Main Area</Link>
            <Link className={'btn btn-primary'} to='tables/patio-area'>{props.PatioArea} Patio Area</Link>
            <Link className={'btn btn-primary'} to='tables/family-area'>{props.familyArea} Family Area</Link>
        </HeaderLeft>
        <HeaderRight className='d-flex justify-content-evenly'>
            <NavLink  to={'tables/avaliable'} className='btn btn-success'>Available</NavLink>
            <NavLink to={'tables/occupied'} className='btn btn-light'>Occupied</NavLink>
            <NavLink to={'tables/done-Soon'} className='btn btn-primary'>Done Soon</NavLink>
            <NavLink to={'tables/reservation'} className='btn btn-warning'>Reservation</NavLink>
        </HeaderRight>
        <div>
          <Button className='me-5' name={'Refresh'}/>
        </div>
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
  justify-content: space-between;
    #dine-in-refresh{
      margin-right: 2rem;
    }
`

const HeaderLeft = styled.div`
display: flex;
justify-content: space-evenly;
width: 40%;
button {
    margin: 0 0.5rem;
}
`;

const HeaderRight = styled.div`
width: 40%;
`;


export default Header