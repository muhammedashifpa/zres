import React from 'react'

const CardWrapper = (props) => {
  return (
    <div className={`card bg-light h-100 ${props.className&&props.className}`}>
        {props.title && <h5 className="card-header text-center fw-bold">{props.title}</h5>}
        <div className="card-body text-center">{props.children}</div>
    </div>
  )
}

export default CardWrapper