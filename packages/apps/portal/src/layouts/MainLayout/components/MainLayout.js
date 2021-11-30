import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import * as S from './MainLayout.styles'

const defaultProps = {}
const propTypes = {}

export const MainLayout = ({ locationAcronym, init }) => {
  useEffect(() => {
    init()
  }, [locationAcronym, init])

  return (
    <S.Container>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
      <Footer />
    </S.Container>
  )
}

MainLayout.defaultProps = defaultProps
MainLayout.propTypes = propTypes

export default MainLayout
