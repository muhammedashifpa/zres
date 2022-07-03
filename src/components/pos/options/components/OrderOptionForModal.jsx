import React from 'react'
import styled from 'styled-components';
import Button from '../../../utils/button/Button';
import { useNavigate} from 'react-router-dom'


export const OrderOptionForModal = (props) => {
  const navigate = useNavigate()
  return (
    <OrderOptions className='py-5'>
      {props.options === 'order-taking-options' ? (
        <>
          {/* <h5 className="">Order Taking Options</h5> */}
          <div className="buttons mt-3">
            <Button name='Existing Check'
              className='btn-warning d-block mx-auto my-1 py-3'
              onClick={()=>navigate('/pos/main')}/>
            <Button name='Walk-In' 
              className='btn-success d-block mx-auto my-1 py-3' 
              onClick={()=>navigate('/pos/main/walk-in')}/>
            <Button name='Dine-In' 
              className='btn-success d-block mx-auto my-1 py-3' 
              onClick={()=>navigate('/pos/main/dine-in')}/>
            <Button name='Take Away' 
              className='btn-success d-block mx-auto my-1 py-3' 
              onClick={()=>navigate('/pos/main/take-away')}/>
            <Button name='Delivery' 
              className='btn-danger d-block mx-auto my-1 py-3' 
              onClick={()=>navigate('/pos/main/delivery')}/>
          </div>
        </>
      ) : (
        <>
          {/* <h5 className="">Main Options</h5> */}
          <div className="buttons mt-3">
            <Button name='Inventory' className='btn-warning d-block mx-auto my-1 py-3' onClick={()=>navigate('/pos/main/invetory')}/>
            <Button name='CRM' className='btn-warning d-block mx-auto my-1 py-3' onClick={()=>navigate('/pos/main/crm')}/>
            <Button name='Accounts' className='btn-success d-block mx-auto my-1 py-3' onClick={()=>navigate('/pos/main/accounts')}/>
          </div>
        </>
      )}
    </OrderOptions>
  );
}

const OrderOptions = styled.div`
  .btn{
    width: 200px;
    padding: 1rem auto;
  }
`;