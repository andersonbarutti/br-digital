import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './Header.styles'
import Logo from '../assets/biologo.png'
import MenuIcon from '../assets/menu.png'
import CloseIcon from '../assets/close.png'

const MENU_ITEMS = [
  { name: 'Horários de treinos', path: '/' },
  { name: 'Unidades', path: '/' },
  { name: 'Treinos', path: '/' },
  { name: 'Programas', path: '/' },
]

export const MobileMenu = props => {
  const { onClose } = props

  return (
    <S.MobileMenu>
      <S.MobileMenuContent>
        <S.MobileMenuClose onClick={onClose}>
          <img src={CloseIcon} alt='Close' />
        </S.MobileMenuClose>
        <S.MobileMenuHeader>
          <S.UserName>
            Olá Danilo
          </S.UserName>
          <S.Plan>
            <S.PlanTitle>
              Plano platinum
            </S.PlanTitle>
            <S.PlanBranchName>
              Unidade paulista
            </S.PlanBranchName>
          </S.Plan>
        </S.MobileMenuHeader>
        <S.MobileMenuItems>
          {MENU_ITEMS.map(item => (
            <S.MobileMenuItem key={item.name}>
              <S.MobileMenuLink to={item.path}>
                {item.name}
              </S.MobileMenuLink>
            </S.MobileMenuItem>
          ))}
          <S.MobileMenuItem>
            <S.MobileMenuLink to='/'>
              Sair
            </S.MobileMenuLink>
          </S.MobileMenuItem>
        </S.MobileMenuItems>
      </S.MobileMenuContent>
    </S.MobileMenu>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.Container>
      {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
      <S.Content>
        <Link to='/'>
          <img src={Logo} alt='bioritmo' width='162' height='27'/>
        </Link>
        <S.Nav>
          <S.NavButton onClick={toggleMenu}>
            <img src={MenuIcon} alt='menu' width='25' height='15'/>
          </S.NavButton>
          <S.NavList>
            {MENU_ITEMS.map(item => (
              <S.NavItem key={item.name}>
                <S.NavLink to={item.path}>
                  {item.name}
                </S.NavLink>
              </S.NavItem>
            ))}
            <S.NavItem><S.NavLink to='/entrar'>Entrar</S.NavLink></S.NavItem>
          </S.NavList>
        </S.Nav>
      </S.Content>
    </S.Container>
  )
}