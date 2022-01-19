import React from 'react'
import { Outlet } from 'react-router-dom'
import Plans from './containers/Main'

const PlansRoute = () => ({
  path: '',
  element: <Outlet />,
  children: [
    { path: '', element: <Plans /> },
    { path: 'unidade/:id', element: <Plans branch /> },
  ]
})

export default PlansRoute