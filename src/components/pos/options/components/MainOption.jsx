import React from 'react'
import styled from 'styled-components'

const MainOption = () => {
  return (
    <Options>
      <h5>Main Options</h5>
    </Options>
  )
}

export default MainOption


const Options = styled.div`
  height: 400px;
  background: white;
  border-radius: 20px;
  padding-top: 50px;
  box-shadow: 0px 0px 6px 0px rgba(122, 119, 119, 0.75);
  h5 {
    color: #040153;
  }
`;