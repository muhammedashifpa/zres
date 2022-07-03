import React from 'react'
import Button from '../../../../../../../../utils/button/Button';

export const ButtonPopUp = ({ name }) => {
  return (
    <>
      <div>
        <h5 className="mb-3">{name}</h5>
        {console.log(name)}
        {name === "Discount" ? (
          <div>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter the discount amount"
            />
            <Button name={"Apply"} className="btn-primary" />
          </div>
        ) : name === "Order Successfull" ? (
          <div>
            <p>Thank you so much for your order.</p>
            <Button name={"OK"} className="btn-primary" />
          </div>
        ) : name === "Payment" ? (
          <div className='my-3'>
                <p className='text-danger fs-6 my-5'>Do you want to redeem your Loyalty points in this transaction?</p>
                <button className="btn btn-outline-danger me-2">Yes</button>
                <button className="btn btn-outline-danger ms-2">No</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
