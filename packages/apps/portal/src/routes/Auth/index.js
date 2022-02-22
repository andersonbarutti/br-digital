import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import SignInRoutes from './SignIn'
import SignUpRoutes from './SignUp'
import ContainerBg from './assets/br.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  background-image: url(${ContainerBg});
  background-repeat: no-repeat;
  background-position: right;
  color: white;
`

const Layout = () => (
  <Container>
    <Outlet />
  </Container>
)

const AuthRoutes = () => ({
  path: '',
  element: <Layout />,
  children: [
    SignInRoutes(),
    SignUpRoutes(),
  ]
})

export default AuthRoutes