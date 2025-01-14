import React from 'react'
import { Outlet } from 'react-router-dom'
//App
import App from './App'
import Footer from './components/footer/Footer'


function Layout() {
  return (
    <div className='overflow-hidden '>
    <App className="absolute"/>
    <Outlet className="absolute"/>
    {/* <Footer className="absolute"/> */}
    {/* <Practice1/> */}
    {/* <ClientsSlider></ClientsSlider> */}
    <Footer></Footer>
    
    </div>
  )
}

export default Layout