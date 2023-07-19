import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import JobDetails from './components/JobDetails/JobDetails'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'viewdetails/:id',
        element:<JobDetails></JobDetails>
      },
      {
        path:'applied-jobs',
        element:<AppliedJobs></AppliedJobs>
      },
     {
      path:'applied-jobs/viewdetails/:id',
      element:<JobDetails></JobDetails>
     },
     {
      path:'statistics',
      element:<Statistics></Statistics>
     },
     {
      path:"blog",
      element:<Blog></Blog>
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
