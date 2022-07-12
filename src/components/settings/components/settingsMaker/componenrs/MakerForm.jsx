import React from 'react'
import styled from 'styled-components';
import Button from '../../../../utils/button/Button';

export const MakerForm = ({title}) => {
  return (
    <>
      <Wrapper className="col-7 p-4">
        <h6 className="fs-4 text-center fw-sm my-4">{title}</h6>
        <form className=''>
          <div className='mb-4 d-flex align-items-center justify-content-center'>
            <label htmlFor="" className="form-label">
              Setting Value
            </label>
            <select className="form-select w-75 ms-3" name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div className="col-12 text-center my-5">
            <Button name="save" className="btn btn-success py-2 mx-2" />
            <Button name="Delete" className="btn btn-danger py-2 mx-2" />
            <Button name="Clear" className="btn btn-warning py-2 mx-2" />
            <Button name="Close" className="btn btn-primary py-2 mx-2" />
          </div>
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: rgba(102, 100, 100, 0.2);
  .btn{
    min-width: 150px;
  }
`;