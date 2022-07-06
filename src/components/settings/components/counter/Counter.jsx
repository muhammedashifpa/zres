import React from 'react'
import Modal from "../../../utils/Modal/Modal";
import { useState } from "react";
import { BsFillFileEarmarkFill, BsFillTrashFill, BsPencil } from "react-icons/bs";
import { AddNewCounter } from './AddNewCounter';

const Counter = () => {
  const [openModal, setOpenModal] = useState(false);

  const CloseModal = () => {
    setOpenModal(false);
  };

  const Handler = () => {
    setOpenModal(true);
  };
  return (
    <>
      <div className="container">
        <div className="mt-3 text-end">
          <button onClick={Handler} className="btn mx-1">
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
            <thead className="bg-warning">
              <tr>
                <th scope="col">SlNo</th>
                <th scope="col">Counter Name</th>
                <th scope="col">Terminal</th>
                <th scope="col">Computer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Pos</td>
                <td>server Terminal</td>
                <td>server</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {openModal && <Modal onClose={CloseModal} element={<AddNewCounter onClose={CloseModal} />} />}
    </>
  );
}

export default Counter