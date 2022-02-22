import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileRoutes from './Profile'
import PasswordRoutes from './Password'
import TokenRoutes from './Token'
import SuccessRoutes from './Success'

const SignUpRoutes = () => ({
  path: 'cadastrar',
  element: <Outlet />,
  children: [
    ProfileRoutes(),
    PasswordRoutes(),
    TokenRoutes(),
    SuccessRoutes(),
  ]
})

export default SignUpRoutes