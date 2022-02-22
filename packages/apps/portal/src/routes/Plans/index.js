import React from 'react'
import { Outlet } from 'react-router-dom'
import Plans from './containers/Main'

const PlansRoutes = () => ({
  path: '',
  element: <Outlet />,
  children: [
    { path: '', element: <Plans /> },
    { path: 'unidade/:slug', element: <Plans branch /> },
  ]
})

export default PlansRoutes