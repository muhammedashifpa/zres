import React from 'react'
import styled from 'styled-components';

export const LeftCompany = () => {
  return (
    <>
      <Wrapper className=" col-6 pt-4">
        <div className="">
          <label className="form-label" htmlFor="">
            Company Name
          </label>
          <input type="text" className="form-control w-75" />
        </div>
        <div class="">
          <label class="form-label">Address</label>
          <textarea class="form-control w-75" rows="3"></textarea>
        </div>
        <div className="">
          <label className="form-label" htmlFor="">
            Location
          </label>
          <input type="text" className="form-control w-75" />
        </div>
        <div className="">
          <label className="form-label" htmlFor="">
            Pincode
          </label>
          <input type="number" className="form-control  w-75" />
        </div>
        <div className="">
          <label className="form-label" htmlFor="">
            Phone
          </label>
          <input type="number" className="form-control w-75" />
        </div>
        <div className="">
          <label className="form-label" htmlFor="">
            Mobile 1
          </label>
          <input type="number" className="form-control w-75" />
        </div>
        <div className="">
          <label className="form-label" htmlFor="">
            Company Name
          </label>
          <input type="number" className="form-control w-75" />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
     div {
      margin: 10px 0px 10px;
    }
  
`;
