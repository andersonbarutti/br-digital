import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.onBackground};
`
export const Content = styled.div`
   padding: 26px 48px ; 
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const NavItem = styled.li`
  text-decoration: none;
  margin-left: 24px;
`
export const NavLink = styled.a`
  color: ${props => props.theme.colors.white};
  :hover{
    text-decoration: underline;
    cursor: pointer;
  }
`