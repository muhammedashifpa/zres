import React from 'react'
import styled from 'styled-components'

const BlockLoading = (props) => {
  return (
    <Wrapper className="text-center">
        <div className="spinner-border text-primary"  style={{width: '3rem', height: '3rem'}}>
            <span className="visually-hidden">Loading...</span>
        </div>
    </Wrapper>
  )
}

export default BlockLoading

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


