import styled from 'styled-components'
import { media } from '@project/components'

export const Container = styled.div`
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
`
export const Main = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Header = styled.div`
  max-width: 1195px;
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1225px) {
    padding: 30px;
  }

  ${media.mobile} {
    padding: 25px 16px 10px;
  }
`
export const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  text-transform: uppercase;
  width: 100%;
`
export const Content = styled.div`
  width: 100%;
`
export const List = styled.div`
  display: flex;
  flex-direction: column;
`
export const Footer = styled.div`
  display: flex;
  justify-content: end;
  max-width: 1195px;
  width: 100%;
  padding: 20px 0;

  @media (max-width: 1225px) {
    padding: 20px 30px;
  }

  ${media.mobile} {
    padding: 20px 16px;
    justify-content: center;
  }
`
export const Button = styled.div`
  cursor: pointer;
  padding: 11px 109px;
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

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  &:last-child {
    border-bottom: none;
  }

  ${media.mobile} {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 40px 16px;
  }
`
export const QuestionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1195px;
  width: 100%;

  ${media.mobile} {
    flex-direction: column;
  }
`
export const QuestionTitle = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  text-transform: uppercase;
  padding-right: 50px;

  ${media.mobile} {
    padding-right: 0;
    margin-bottom: 36px;
  }
`
export const Answer = styled.div`
  width: 302px;
  display: flex;
  justify-content: space-between;

  ${media.mobile} {
    width: 100%;
  }
`
export const Option = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 139px;
  height: 44px;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  text-transform: uppercase;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.white};

  background: ${props => props.selected ? props.theme.colors.white : 'transparent'};
  color: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.white};
  
  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
  }

  ${media.mobile} {
    width: 100%;
    flex: 1;
    &:last-child {
      margin-left: 22px;
    }
  }
`

