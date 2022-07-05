import React from 'react'
import { BsHouseFill } from "react-icons/bs";

export const RightHeader = () => {
  return (
    <>
      <div className="header d-flex justify-content-between align-items-center p-2 shadow-sm rounded-pill">
        <div className="d-flex ms-2">
          <BsHouseFill className="inline mt-1" />
          <h6 className="ms-2">Menu Categories</h6>
        </div>
        <div className="">
          <div className="form-check form-switch form-switch-sm">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          </div>
        </div>
      </div>
    </>
  );
}
