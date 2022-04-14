import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isUserSignedIn } from '@project/core/src/modules/Session/User'
import * as S from './Header.styles'
import Logo from '../assets/biologo.png'
import MenuIcon from '../assets/menu.png'
import CloseIcon from '../assets/close.png'
import AvatarIcon from '../assets/avatar.png'
import ExpandIcon from '../assets/expand.png'

const MENU_ITEMS = [
  { name: 'Horários de treinos', path: '/' },
  { name: 'Unidades', path: '/' },
  { name: 'Treinos', path: '/' },
  { name: 'Programas', path: '/' },
]

export const MobileMenu = props => {
  const { onClose } = props
  // const isAuthenticated = isUserSignedIn()

  return (
    <S.MobileMenu>
      <S.MobileMenuContent>
        <S.MobileMenuClose onClick={onClose}>
          <img src={CloseIcon} alt='Close' />
        </S.MobileMenuClose>
        <S.MobileMenuHeader>
          <S.UserName>
            Olá Anderson
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const isAuthenticated = isUserSignedIn()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
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
            {!isAuthenticated && <S.NavItem><S.NavLink to='/entrar'>Entrar</S.NavLink></S.NavItem>}
            {isAuthenticated && <S.NavItem>
              <S.UserMenu onClick={toggleDropdown}>
                <S.UserMenuAvatar>
                  <img src={AvatarIcon} alt='menu' width='12' height='12' />
                  <S.AlertIcon />
                </S.UserMenuAvatar>
                <S.UserMenuName>
                  Olá Anderson
                </S.UserMenuName>
                <S.UserMenuExpandIcon>
                  <img src={ExpandIcon} alt='menu' width='11' height='6'/>
                </S.UserMenuExpandIcon>

                {isDropdownOpen && <S.UserMenuDropdown>
                  <S.UserMenuDropdownContent>
                    <S.UserMenuDropdownHeader>
                      <S.UserMenuDropdownName>
                        Anderson
                      </S.UserMenuDropdownName>
                      <S.UserMenuDropdownPlan>
                        Plano Platinum
                      </S.UserMenuDropdownPlan>
                      <S.UserMenuDropdownBranch>
                        Unidade Paulista
                      </S.UserMenuDropdownBranch>
                    </S.UserMenuDropdownHeader>
                    <S.UserMenuDropdownNavList>
                      <S.UserMenuDropdownNavItem>
                        <S.UserMenuDropdownNavLink to='/'>
                          Sair
                        </S.UserMenuDropdownNavLink>
                      </S.UserMenuDropdownNavItem>
                    </S.UserMenuDropdownNavList>
                  </S.UserMenuDropdownContent>
                </S.UserMenuDropdown>}
              </S.UserMenu>
            </S.NavItem>}
          </S.NavList>
        </S.Nav>
      </S.Content>
    </S.Container>
  )
}