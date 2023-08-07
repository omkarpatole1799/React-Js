import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
function RootComponenet() {
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </>
  )
}

export default RootComponenet