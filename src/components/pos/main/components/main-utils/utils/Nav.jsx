import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';



const Nav = (props) => {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
        {
            props.data&&props.data.map(item=>{
                return(
                    <ListWrapper className="nav-item" key={item.key}>
                    <NavLink to={item.link} className="nav-link" aria-current="page">
                      {item.icon}
                      {item.name}
                    </NavLink>
                  </ListWrapper>
                )
            })
        }
  </ul>
  )
}

export default Nav

const ListWrapper = styled.li`
    .nav-link{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: .8rem;
        svg{
            font-size: 1.5rem;
            margin-bottom: .5rem;
        }
    }
`