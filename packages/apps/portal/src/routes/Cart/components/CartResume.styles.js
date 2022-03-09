import styled from 'styled-components'
import { media } from '@project/components'

export const Container = styled.div``
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 35px;
  background: white;
  min-height: 819px;
  color: black;

  ${media.tablet} {
    border-radius: 12px 12px 0 0;
  }
`
export const Header = styled.div`
  padding: 0 11px 11px;
  border-bottom: 1px solid #C4C4C4;
  margin-bottom: 35px;
`
export const Close = styled.div`
  display: none;
`
export const Title = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-weight: bold;
  text-transform: uppercase;
`
export const Resume = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`
export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 11px;
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
`


export const Product = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`
export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`
export const ProductTitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  text-transform: uppercase;
`
export const ProductPrice = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  text-transform: uppercase;
`
export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
`
export const Text = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.7);
`


export const Cupom = styled.div`
  padding: 0 11px 16px;
  border-bottom: 1px solid #C4C4C4;
`
export const CupomTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 17px;
`
export const CupomForm = styled.div`
  display: flex;
  & > *:first-child {
    margin-right: 16px;
  }
`
export const Input = styled.input`
  width: 100%;
  background: white;
  padding: 22px 16px;
  border: none;
  box-shadow: none;
  outline: none;
  font-size: 14px;
  font-weight: normal;
  line-height: 16px;
  border: 1px solid black;

  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
  }
`
export const CupomButton = styled.div`
  width: 154px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;

  &:hover, &:focus {
    opacity: 0.8;
    outline: none;
  }
`


export const Footer = styled.div`
  padding: 36px 11px 0;
`
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 53px;
`
export const TotalTitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  text-transform: uppercase;
`
export const TotalPrice = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-weight: bold;
  text-transform: uppercase;
`
export const Button = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;

  &:hover, &:focus {
    opacity: 0.8;
    outline: none;
  }
`
