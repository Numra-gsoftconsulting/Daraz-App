import React from 'react'
import Navbar from '../Components/Navbar'
import {Link, Outlet} from 'react-router-dom';

const  SharedLayout = () => {
  return (
    <div>
    <Navbar />
    <Outlet />
    </div>
  )
}

export default SharedLayout