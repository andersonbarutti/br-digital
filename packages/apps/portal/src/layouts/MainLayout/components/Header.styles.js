import styled from 'styled-components'
import { media } from '@project/components'

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.onBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Content = styled.div`\
  width: 100%;
  max-width: 1440px;
  padding: 26px 48px; 
  display: flex;
  flex-direction: row;
  align-items: center;
  ${media.mobile} {
    padding: 23px 20px;
  }
`;

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
export const NavLink = styled.a`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  :hover{
    text-decoration: underline;
    cursor: pointer;
  }
`