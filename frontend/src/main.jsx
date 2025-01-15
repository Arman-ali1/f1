import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Form, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Login from './components/login/Login.jsx'
import InspectionPage from './components/checks/InspectionPage.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route   path='/' element={<Layout />}>
      <Route path='' element={<Login />} />
      <Route path='/home' element={<App />} />
      <Route path='/inspection' element={<InspectionPage />}/>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider  router={router} />
  </React.StrictMode>,
)