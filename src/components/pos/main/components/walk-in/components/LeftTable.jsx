import React from 'react'

export const LeftTable = ({tableData}) => {
  console.log("tableData",tableData);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Item Name</th>
          <th scope="col">Qty</th>
          <th scope="col">Price</th>
          <th scope="col">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.quantity}</td>
              <td>{data.price}</td>
              <td>{data.SubTotal}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
