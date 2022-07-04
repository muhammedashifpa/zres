import React from 'react'
import Button from '../../../../../../utils/button/Button';

export const LeftHead = () => {
  return (
    <div className="orderHead  ">
      <div className="row ">
        <p className="col">
          Check :<span>458</span>
        </p>
        <p className="col text-end">
          25 Nov 21 <span className="ms-2">17:58</span>
        </p>
      </div>
      <div className="row">
        <p className="col d-flex align-items-start">
          <span>Order Type :</span>
          <span className="ms-3">
            <select
              className="form-select form-select mb-3 ps-2 bg-info"
              aria-label=".form-select-lg example"
              style={{ width: "100px", height: "30px", padding: " 0px", }}
            >
              <option className="" value="Walk in">
                Walk in
              </option>
              <option className="" value="Dine in">
                Dine in
              </option>
            </select>
          </span>
        </p>
        <p className="col text-end">
          25 Nov 21 <span className="ms-2">17:58</span>
        </p>
      </div>
      <div className=" d-flex">
        <input
          type="search"
          className="form-control rounded me-2"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <Button name="ADD" className="btn btn-primary w-25" />
      </div>
    </div>
  );
}
