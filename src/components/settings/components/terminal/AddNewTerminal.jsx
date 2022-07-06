import React from 'react'
import styled from 'styled-components'
import Button from '../../../utils/button/Button';

export const AddNewTerminal = ({onClose}) => {
  return (
    <>
      <Wrapper className="p-5">
        <form className="p-3">
          <div className="my-3  text-start">
            <label className="form-label" htmlFor="">
              Code
            </label>
            <input type="number" className="form-control" />
          </div>
          <div className="my-3 text-start">
            <label className="form-label" htmlFor="">
              Terminal Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="my-3 text-start">
            <label className="form-label" htmlFor="">
              Computer Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="my-3 text-start">
            <label className="form-label" htmlFor="">
              Description
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="buttons py-3">
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
  width: 800px;
  form {
    background: rgba(102, 100, 100, 0.2);
    .btn {
      min-width: 150px;
    }
  }
`;