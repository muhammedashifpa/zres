import React from 'react'
import styled from 'styled-components';

export const LeftOrderBill = ({bill}) => {
  return (
    <div>
      <BillWrapper className="col-5 ms-auto">
        {bill &&
          bill.map((data) => (
            <div className="d-flex justify-content-between">
              <p className="" style={{fontWeight: data.style==="sub"? "600": data.style==="total" ? "bold" : ""}}>{data.name}:</p>
              <span className="">{data.count}</span>
            </div>
          ))}
      </BillWrapper>
    </div>
  );
}

const BillWrapper = styled.div`
  
`;