import React from 'react'
import  ReactDOM from 'react-dom';
import Backdrop from './utils/Backdrop';
import Spinner from './utils/Spinner';




const FullLoading = (props) => { 
  return (
    <>
        {props.loading&&ReactDOM.createPortal(
            <Backdrop>
                <Spinner/>
            </Backdrop>,
            document.getElementById('loading-root')
        )}
    </>
  )
}

export default FullLoading


