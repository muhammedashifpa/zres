import React from 'react'
import { DragDrop } from './DragDrop';
import Button from "../../../../utils/button/Button";
import styled from "styled-components";


export const RightCompany = () => {
  return (
    <>
      <Wrapper className="col-6 pt-4">
        <div className="">
          <DragDrop />
        </div>
        <div className="">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input type="email" className="form-control w-75" />
        </div>
        <div className="">
          <label className="form-label" htmlFor="">
            Website
          </label>
          <input type="url" className="form-control w-75" />
        </div>
        <div className="">
          <label className="form-label" htmlFor="">
            Tax
          </label>
          <select class="form-select w-75" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="">
          <label className="form-label" htmlFor="">
            Tax Date
          </label>
          <select class="form-select w-75" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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