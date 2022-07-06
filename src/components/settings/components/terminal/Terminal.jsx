
import React from 'react'
import { BsFillFileEarmarkFill, BsFillTrashFill, BsPencil } from "react-icons/bs";

const Terminal = () => {
  return (
    <>
      <div className="container">
        <div className="mt-3 text-end">
          <button className="btn mx-1">
            <BsFillFileEarmarkFill className="mr-2" /> New
          </button>
          <button className="btn mx-1">
            <BsPencil className="mr-2" /> Edit
          </button>
          <button className="btn mx-1">
            <BsFillTrashFill className="mr-2" /> Delete
          </button>
        </div>
        <div className="row  bg-white mt-3">
          <table className="table">
            <thead className="bg-info">
              <tr>
                <th scope="col">SlNo</th>
                <th scope="col">Code</th>
                <th scope="col">Terminal Name</th>
                <th scope="col">Computer Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>server Terminal</td>
                <td>server</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Terminal