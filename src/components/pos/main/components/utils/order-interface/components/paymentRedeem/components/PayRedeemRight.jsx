import React from 'react'
import Button from '../../../../../../../../utils/button/Button';

export const PayRedeemRight = () => {
  return (
    <>
      <div className="right col-6">
        <div className="col-10 mx-auto">
          <input type="number" className="form-control py-4" />
        </div>
        <div className="row d-flex justify-content-center my-2">
          <Button name="0.000" className="bg-primary d-inline col-4 mx-2 py-3" />
          <Button name="100.000" className="bg-primary d-inline col-4 mx-2  py-3" />
        </div>
        <div className="row d-flex justify-content-center my-2">
          <Button name="300" className="bg-primary d-inline col-4 mx-2 py-3" />
          <Button name="200" className="bg-primary d-inline col-4 mx-2 py-3" />
        </div>
        <div className="row d-flex justify-content-center my-2">
          <Button name="1000" className="bg-primary d-inline col-4 mx-2 py-3" />
          <Button name="Next $ Up" className="bg-primary d-inline col-4 mx-2 py-3" />
        </div>
        <div className="row d-flex justify-content-center my-2">
          <Button name="Exact Cash" className="bg-primary d-inline col-4 mx-2 py-3" />
          <Button name="Cash" className="bg-primary d-inline col-4 mx-2 py-3" />
        </div>
      </div>
    </>
  );
}
