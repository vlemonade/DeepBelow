import { useState } from 'react'
import './App.css'
import Dashboard from './Compenents/Dashboard/Dashboard'
import Login from './Compenents/Login/Login'
import Register from './Compenents/Register/Register'


import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },

  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  },

  {
    path: '/register',
    element: <div><Register/></div>
  }

])

function App() {
  return (
  <div>
    <RouterProvider router={router}/>

  </div>
  )
}

export default App
