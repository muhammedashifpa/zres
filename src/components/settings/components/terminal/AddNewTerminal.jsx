import React from 'react'
import styled from 'styled-components'
import Button from '../../../utils/button/Button';

export const AddNewTerminal = ({onClose}) => {
  return (
    <>
      <Wrapper className="p-5">
        <h3 className="text-start mb-3">Terminal Master</h3>
        <form className="p-3">
          <div className="my-3 d-flex">
            <label className="form-label" htmlFor="">
              Code
            </label>
            <input type="number" className="form-control w-75 ms-3" />
          </div>
          <div className="my-3 d-flex">
            <label className="form-label" htmlFor="">
              Terminal Name
            </label>
            <input type="text" className="form-control w-75 ms-3" />
          </div>
          <div className="d-flex my-3">
            <label className="form-label" htmlFor="">
              Computer Name
            </label>
            <input type="text" className="form-control w-75 ms-3" />
          </div>
          <div className="d-flex my-3">
            <label className="form-label" htmlFor="">
              Description
            </label>
            <input type="text" className="form-control w-75 ms-3" />
          </div>
          <div className="buttons">
            <Button name="save" className="btn btn-success mx-2" />
            <Button name="Delete" className="btn btn-danger mx-2" />
            <Button name="Clear" className="btn btn-warning mx-2" />
            <Button onClick = {onClose} name="Close" className="btn btn-primary mx-2" />
          </div>
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
width: 1000px;
  form {
    background: rgba(102, 100, 100, 0.2);
    
  }
`;