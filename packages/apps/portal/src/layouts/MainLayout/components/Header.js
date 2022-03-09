import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './Header.styles'
import Logo from '../assets/biologo.png'
import MenuIcon from '../assets/menu.png'

export default function Header() {
  return (
    <S.Container>
      <S.Content>
      <Link to='/'>
        <img src={Logo} alt='bioritmo' width='162' height='27'/>
      </Link>
      <S.Nav>
        <S.NavButton>
          <img src={MenuIcon} alt='menu' width='25' height='15'/>
        </S.NavButton>
        <S.NavList>
          <S.NavItem><S.NavLink to='/'>Horários de treinos</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink to='/'>Unidades</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink to='/'>Treinos</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink to='/'>Programas</S.NavLink></S.NavItem>
          <S.NavItem><S.NavLink to='/entrar'>Entrar</S.NavLink></S.NavItem>
        </S.NavList>
      </S.Nav>
      </S.Content>
    </S.Container>
  )
}