import styled from 'styled-components'
import { media } from '@project/components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 116px 30px;

  ${media.mobile} {
    align-items: center;
    padding: 74px 15px;
  }
`

export const Main = styled.div`
  display: flex;
  max-width: 444px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.onBackground};

  ${media.mobile} {
    flex-direction: column;
    border: none;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 46px 71px;
  width: 100%;
  flex: 1;

  ${media.mobile} {
    align-items: center;
    padding: 0 0 50px;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`
export const Avatar = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  background: ${props => props.theme.colors.white};
  border-radius: 50%;
`
export const Title = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 40px;
  text-align: center;
`
export const Description = styled.div`
  font-size: 20px;
  line-height: 23px;
  font-weight: normal;
  text-align: center;
`
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Button = styled.div`
  cursor: pointer;
  padding: 11px 41px;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }
`