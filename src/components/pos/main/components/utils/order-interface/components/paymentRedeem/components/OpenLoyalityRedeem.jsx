import React from 'react'

export const OpenLoyalityRedeem = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <p className="text-danger fs-6 my-5">
          Do you want to redeem your Loyalty points in this transaction?
        </p>
        <div className="div">
          <button className="btn btn-outline-danger me-2">Yes</button>
          <button className="btn btn-outline-danger ms-2">No</button>
        </div>
      </div>
    </>
  );
}
