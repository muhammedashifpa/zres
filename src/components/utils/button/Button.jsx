import React from 'react'

const Button = React.memo((props) => {
  return (
    <button type={`button ${props.type&& props.type} `}
     className={`btn btn-primary ${props.className&& props.className}`}
     onClick={props.onClick&&props.onClick}
     >
        {props.name}
    </button>
  )
});

export default Button;