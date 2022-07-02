import React from 'react'

const BlockLoading = (props) => {
  return (
    <div class="text-center my-5">
        <div class="spinner-border text-primary"  style={{width: '3rem', height: '3rem'}}>
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default BlockLoading


