import React from 'react'
import { Outlet } from 'react-router-dom'
//App
import App from './App'


function Layout() {
  return (
    <div className='overflow-hidden '>
    <App className="absolute"/>
    <Outlet className="absolute"/>
    {/* <Footer className="absolute"/> */}
    {/* <Practice1/> */}
    {/* <ClientsSlider></ClientsSlider> */}
    
    </div>
  )
}

export default Layout