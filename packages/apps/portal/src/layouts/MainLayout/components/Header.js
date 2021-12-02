import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './Header.styles'

const Logo = require('../assets/biologo.png')
export default function Header() {
  return (
    <S.Container>
      <S.Content>
      <img src={Logo} alt="bioritmo" width="162" height="27"/>
      <S.Nav>
        <S.NavList>
          <S.NavItem><S.NavLink>Horários de treinos</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink>Unidades</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink>Treinos</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink>Programas</S.NavLink></S.NavItem>
        </S.NavList>
      </S.Nav>
      </S.Content>
    </S.Container>
  )
}