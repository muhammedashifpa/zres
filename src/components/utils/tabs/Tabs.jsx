import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const Tabs = (props) => {
    const { data } = props;
  return (
    <UlWrapper className="nav nav-tabs">
        {data&&data.map(item=>{
            return(
            <li key={item.key} className="nav-item">
                <NavLink className='nav-link' to={item.path}>{item.name}</NavLink>
            </li>
            )
        })}
    </UlWrapper>
  )
}

export default Tabs;

const UlWrapper = styled.ul`
    h6{
        cursor: pointer;
    }
`