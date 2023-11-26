import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const myCreatedRoute = createBrowserRouter([
  {
    path: '/',
    element: 'this is my first route'
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
