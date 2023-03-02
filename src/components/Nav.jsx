import React from 'react'
import { Outlet} from 'react-router-dom'
import Navbar from './Navbar'


function Nav({onSearch}) {
    

  return (
    <div >

      <Navbar onSearch={onSearch} />      
      <Outlet />

    </div>
  )
}

export default Nav