import React from 'react'

const BlockLoading = (props) => {
  return (
    <div className="text-center my-5">
        <div className="spinner-border text-primary"  style={{width: '3rem', height: '3rem'}}>
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default BlockLoading


