import React from 'react'
import styled from 'styled-components';

const Tabs = (props) => {
    const {
        data,
        active,
        activeTabHandler
    }=props;
  return (
    <UlWrapper className="nav nav-tabs">
        {data&&data.map(item=>{
            return(
            <li key={item.key} className="nav-item" onClick={()=>activeTabHandler(item.tabValue,item.path)}>
                <h6 
                    className={`nav-link ${item.tabValue===active&&'active'}`}
                    >{item.name}
                </h6>
            </li>

            )
        })}
        {/* <li className="nav-item">
            <h6 className="nav-link">Link</h6>
        </li>
        <li className="nav-item">
            <h6 className="nav-link" >Link</h6>
        </li>
        <li className="nav-item">
            <h6 className="nav-link ">Disabled</h6>
        </li> */}
    </UlWrapper>
  )
}

export default Tabs;

const UlWrapper = styled.ul`
    h6{
        cursor: pointer;
    }
`