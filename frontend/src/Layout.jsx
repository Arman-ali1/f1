import React from 'react'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div className='overflow-hidden '>
    {/* <Navbar className="absolute"/> */}
    <Outlet className="absolute"/>
    {/* <Footer className="absolute"/> */}
    {/* <Practice1/> */}
    {/* <ClientsSlider></ClientsSlider> */}
    
    </div>
  )
}

export default Layout