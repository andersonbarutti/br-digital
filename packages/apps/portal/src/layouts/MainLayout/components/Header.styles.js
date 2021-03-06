import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from '@project/components'

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.onBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 26px 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${media.mobile} {
    padding: 23px 20px;
  }
`

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

export const NavButton = styled.div`
  display: none;

  img {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  ${media.mobile} {
    display: flex;
  }
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${media.mobile} {
    display: none;
  }
`
export const NavItem = styled.li`
  text-decoration: none;
  margin-left: 24px;
`
export const NavLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  text-decoration: none;
  :hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.onBackground};
  z-index: 9999;
`
export const MobileMenuContent = styled.div``
export const MobileMenuClose = styled.div`
  position: absolute;
  top: 28px;
  right: 21px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
export const MobileMenuHeader = styled.div`
  padding: 26px 24px 40px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.3);
`
export const UserName = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 19px;
`
export const Plan = styled.div`
  display: flex;
  flex-direction: column;
`
export const PlanTitle = styled.div`
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5px;
` 
export const PlanBranchName = styled.div`
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`
export const MobileMenuItems = styled.div`
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
`
export const MobileMenuItem = styled.div`
  margin-bottom: 36px;
`
export const MobileMenuLink = styled(Link)`
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.colors.onBackground};

  &:hover {
    opacity: 0.8;
  }
`

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  z-index: 9999;

  /* &:hover {
    opacity: 0.8;
  } */
`
export const UserMenuAvatar = styled.div`
  margin-right: 8px;
  position: relative;
`
export const AlertIcon = styled.div`
  position: absolute;
  top: -3px;
  right: -5px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #DF3C3C;
`
export const UserMenuName = styled.div`
  margin-right: 4px;
`
export const UserMenuExpandIcon = styled.div``

export const UserMenuDropdown = styled.div`
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.onSurface};

  position: absolute;
  bottom: -177px;
  width: 153px;
  right: 0;
  z-index: 9999;
`
export const UserMenuDropdownContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const UserMenuDropdownHeader = styled.div`
  padding: 16px 16px 6px;

`
export const UserMenuDropdownName = styled.div`
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 12px;
`
export const UserMenuDropdownPlan = styled.div`
  font-size: 12px;
  line-height: 19px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 5px;
  font-weight: 500;
`
export const UserMenuDropdownBranch = styled.div`
  font-size: 12px;
  line-height: 19px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
`

export const UserMenuDropdownNavList = styled.div`
  display: flex;
  flex-direction: column;
`
export const UserMenuDropdownNavItem = styled.div`
  width: 100%;
`
export const UserMenuDropdownNavLink = styled.div`
  padding: 16px;
  width: 100%;
  cursor: pointer;

  font-size: 12px;
  line-height: 12px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.onPrimary};
  }
`