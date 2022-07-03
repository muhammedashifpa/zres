import React from "react";

const Input = (props) => {
  return (
    <>
      <div className={`col-md-3 ${props.className&& props.className}`}>
        <label className="form-label">{props.label}</label>
        <input type="text" className="form-control" />
      </div>
    </>
  );
};

export default Input;
