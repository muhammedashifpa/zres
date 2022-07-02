import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { 
    BsFillArrowDownCircleFill,
    BsFillHouseDoorFill,
    BsFillBagFill,
    BsFillPersonFill

 } from "react-icons/bs";
 import {
    MdRestaurant,
    MdSettings,
    MdDeliveryDining
 } from "react-icons/md";
 import { FaWarehouse } from "react-icons/fa";
import Nav from './utils/Nav';

const SideBar = () => {
  return (
    <SideBarWrapper className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100" >
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xLinkHref="#bootstrap"/></svg>
      <span className="fs-4">Sidebar</span>
    </Link>
    <hr/>
    <Nav data={NavData}/>
    <hr/>
    {/* <div className="dropdown">
      <Link to='/' className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </Link>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a className="dropdown-item" href="#">New project...</Link></li>
        <li><a className="dropdown-item" href="#">Settings</Link></li>
        <li><a className="dropdown-item" href="#">Profile</Link></li>
        <li><a className="dropdown-divider"></li>
        <li><a className="dropdown-item" href="#">Sign out</Link></li>
      </ul>
    </div> */}
  </SideBarWrapper>
  )
}

export default SideBar


const SideBarWrapper = styled.div`
    
    height: 100vh;
    height: -webkit-fill-available;
    max-height: 100vh;
    /* overflow-x: auto;
    overflow-y: hidden; */

    .dropdown-toggle { outline: 0; }

    .btn-toggle {
    padding: .25rem .5rem;
    font-weight: 600;
    color: rgba(0, 0, 0, .65);
    background-color: transparent;
    }
    .btn-toggle:hover,
    .btn-toggle:focus {
    color: rgba(0, 0, 0, .85);
    background-color: #d2f4ea;
    }

    .btn-toggle::before {
    width: 1.25em;
    line-height: 0;
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
    transition: transform .35s ease;
    transform-origin: .5em 50%;
    }

    .btn-toggle[aria-expanded="true"] {
    color: rgba(0, 0, 0, .85);
    }
    .btn-toggle[aria-expanded="true"]::before {
    transform: rotate(90deg);
    }

    .btn-toggle-nav a {
    padding: .1875rem .5rem;
    margin-top: .125rem;
    margin-left: 1.25rem;
    }
    .btn-toggle-nav a:hover,
    .btn-toggle-nav a:focus {
    background-color: #d2f4ea;
    }

    .scrollarea {
    overflow-y: auto;
    }

`

const NavData = [
    {
        key:1,
        name:'Dashboard',
        link:'dashbord',
        icon:<BsFillHouseDoorFill/>,
    },
    {
        key:2,
        name:'Walk In',
        link:'walk-in',
        icon:<BsFillBagFill/>,
    },
    {
        key:3,
        name:'Dine In',
        link:'dine-in',
        icon:<MdRestaurant/>,
    },
    {
        key:4,
        name:'CRM',
        link:'crm',
        icon:<MdSettings/>,
    },
    {
        key:5,
        name:'Delivery Manager',
        link:'delivery-management',
        icon:<MdDeliveryDining/>,
    },
    {
        key:6,
        name:'Inventory',
        link:'invetory',
        icon:<FaWarehouse/>,
    },
    {
        key:7,
        name:'Accounts',
        link:'accounts',
        icon:<BsFillPersonFill/>,
    },
]