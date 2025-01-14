import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Form, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route   path='/' element={<Layout />}>
      {/* <Route path='' element={<App />} /> */}
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider  router={router} />
  </React.StrictMode>,
)