import styled from 'styled-components'

export const Container = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
  background: ${props => props.theme.colors.painelBackground};
  color: ${props => props.theme.colors.onBackground};
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  flex: 1;
  padding: 26px 0;
  justify-content: center;
  align-items: center;
`
export const Top = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding-left: 15%;
  padding-right: 15%;
`
export const Logo = styled.a`
  :hover {
    cursor: pointer;
  }
`
export const Menu = styled.nav``

export const MenuList = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
`

export const MenuItem = styled.li`
  margin-bottom: 12px;
`
export const MenuItemLink = styled.a`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
export const Divider = styled.hr`
  margin: 40px 0px;
  color: ${props => props.theme.colors.white};
`
export const Bottom = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding-left: 15%;
  padding-right: 15%;
`
export const Links = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Copyright = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`
export const AppContent = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  justify-content: center;
`
export const AppContentTitle = styled.span`
  font-size: 14px;
  grid-column: span 2;
  justify-self: center;
`
export const Stores = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
