import styled from 'styled-components'
import { media } from '@project/components'

export const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.painelBackground};
  color: ${props => props.theme.colors.onBackground};
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 1040px;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const Top = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 26px 25px;

  ${media.mobile} {
    grid-template-columns: none;
    grid-template-rown: auto auto auto;
    padding: 42px 49px;
  }
`
export const Logo = styled.a`
  :hover {
    cursor: pointer;
  }
`
export const Menu = styled.nav`
  ${media.mobile} {
    max-width: 335px;
    padding: 49px 0;
  }
`

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
  color: ${props => props.theme.colors.white};
  opacity: 0.3;
`
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 26px 25px;
  
  ${media.mobile} {
    flex-direction: column-reverse;
    padding: 42px 49px;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 170px;

  ${media.mobile} {
    margin-right: 0;
  }
`

export const Links = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  ${media.mobile} {
    flex-wrap: wrap;

    ${MenuItem} {
      margin-bottom: 12px;
      width: 50%;
      padding: 0px 0 20px;
    }
  }
`
export const Copyright = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`
export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 259px;
`
export const AppContentTitle = styled.span`
  font-size: 14px;
  margin-bottom: 17px;
`
export const Stores = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  ${media.mobile} {
    margin-bottom: 56px;
  }
`
