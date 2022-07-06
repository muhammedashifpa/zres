import React from 'react'
import { Link } from 'react-router-dom'

const AppNav = () => {
  return (
    <div className='d-flex flex-column gap-3 w-25 mx-auto mt-5'>
        <Link className='btn btn-primary' to='pos/login'>Pos Login</Link> 
        <Link className='btn btn-primary' to='pos/options'>Pos Options</Link> 
        <Link className='btn btn-primary' to='kds'>Kds</Link> 
        <Link className='btn btn-primary' to='settings'>Settings</Link> 
    </div>
  )
}

export default AppNav