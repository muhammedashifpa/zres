import React from 'react'
import styled from "styled-components";
import Button from '../../../../utils/button/Button';

export const RightSettingManager = () => {
  return (
    <>
      <Wrapper className="col-8 mx-3 rounded">
        <form action="">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Module
            </label>
            <select className="form-select my-2" aria-label="Default select example">
              <option defaultValue="">....</option>
              <option value="1">...</option>
              <option value="2">......</option>
            </select>
          </div>
          <table className="table bg-light rounded">
            <thead>
              <tr>
                <th>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate"
                    />
                  </div>
                </th>
                <th>defaultValue Type</th>
                <th>Is Mandatory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate"
                    />
                  </div>
                </td>
                <td>Role</td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate"
                    />
                  </div>
                </td>
                <td>User</td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="">
            <label htmlFor="Setting Name" className="form-label">
              Setting Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="d-flex col-12 my-3">
            <label htmlFor="" className="form-label ms-2 me-3">
              Setting key
            </label>
            <Button name="Key" className="btn-primary  ms-2 me-3" />
            <div className="col-6 ">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Description
            </label>
            <textarea className="form-control" id="" rows="3"></textarea>
          </div>
          <div className="d-flex col-12 justify-content-evenly">
            <div className="col-5">
              <label htmlFor="" className="form-label">
                Value Type
              </label>
              <select className="form-select my-2" aria-label="Default select example">
                <option defaultValue>....</option>
                <option value="1">...</option>
                <option value="2">......</option>
              </select>
            </div>
            <div className="col-5">
              <label htmlFor="" className="form-label">
                Default
              </label>
              <select className="form-select my-2" aria-label="Default select example">
                <option defaultValue>....</option>
                <option value="1">...</option>
                <option value="2">......</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="" className="form-label">
              Value Eg
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="my-3 col-12 d-flex justify-content-around">
            <Button name="Save" className="btn btn-success col-2" />
            <Button name="Delete" className="btn btn-Danger col-2" />
            <Button name="Clear" className="btn btn-Warning col-2" />
            <Button name="Close" className="btn btn-primary col-2" />
          </div>
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: #c7c6d7;
`;