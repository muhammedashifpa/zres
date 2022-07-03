import React from 'react'
import Announcement from '../sales/components/Announcement';

const Marketing = () => {
  return (
    <div className='container'>
      {/* *********************** row ************************ */}
      <div className="row my-3">
        <div className="col-8  ">
          <div className="row mb-2">
            <div className="col-4  ">
              <Announcement/>
            </div>
            <div className="col-4 ps-0 ">
            <Announcement/>
            </div>
            <div className="col-4 px-0 ">
            <Announcement/>
            </div>
          </div>
          <div className="row">
            <div className="col-4  ">
              <Announcement/>
            </div>
            <div className="col-4 ps-0 ">
            <Announcement/>
            </div>
            <div className="col-4 px-0 ">
            <Announcement/>
            </div>
          </div>
        </div>
        <div className="col-4  ">
          <Announcement/>
        </div>
      </div>
      {/* ------------------------ row ------------------------ */}

      {/* *********************** row ************************ */}
      <div className="row my-3">
        <div className="col-4">
          <Announcement/>
        </div>
        <div className="col-4 px-0">
          <Announcement/>
        </div>
        <div className="col-4 ">
          <Announcement/>
        </div>
      </div>
      {/* ------------------------ row ------------------------ */}
      
      {/* *********************** row ************************ */}
      <div className="row my-3">
        <div className="col-4">
          <Announcement/>
        </div>
        <div className="col-4 px-0">
          <Announcement/>
        </div>
        <div className="col-4 ">
          <Announcement/>
        </div>
      </div>
      {/* ------------------------ row ------------------------ */}
    </div>
  )
}

export default Marketing;