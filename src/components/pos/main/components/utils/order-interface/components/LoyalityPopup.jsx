import React from 'react'
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const LoyalityPopup = () => {
  return (
    <>
      <Wrapper>
        <div className="date">
          <p className="text-end fw-bold">11-7-2022</p>
        </div>
        <div className="search-box text-center d-flex justify-content-center my-5">
          <div className="search w-50">
            <input type="search" className="form-control ps-5  shadow" placeholder="Search by Customer Number or Contact Number" />
            <BsSearch className="search-icon" />
          </div>
          <button className="btn btn-primary ms-5">search</button>
        </div>
        <div className="table-data">
          <table class="table">
            <thead>
              <th scope="col">Customer Name</th>
              <th scope="col">Contact No</th>
              <th scope="col">Total Loyality Points</th>
              <th scope="col">Loyality Used</th>
              <th scope="col">Balance</th>
            </thead>
            <tbody>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 1000px;
  height: 80vh;
  .search{
    position: relative;
  }
  .search-icon{
    position: absolute;
    top: 11px;
    left: 10px;
  }
  .table-data{
    overflow: hidden;
    height: 400px;
    overflow-y: scroll;
  }
`