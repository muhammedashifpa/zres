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
        ) : (
          ""
        )}
      </div>
    </>
  );
};
