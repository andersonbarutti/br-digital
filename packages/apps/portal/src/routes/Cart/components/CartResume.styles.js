import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 35px;
  background: white;
  min-height: 819px;
  color: black;
  
  @media (max-width: 1060px) {
    border-radius: 12px 12px 0 0;
    padding: 16px;
  }
`
export const Header = styled.div`
  padding: 0 11px 11px;
  border-bottom: 1px solid #C4C4C4;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1060px) {
    cursor: pointer;
    padding: 0 0 11px; 

    &:hover {
      opacity: 0.9;
    }
  }
`
export const Close = styled.div`
  width: 55px;
  height: 4px;
  background-color: #171717;
  border-radius: 3px;
  margin-bottom: 16px;
`
export const Title = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-weight: bold;
  width: 100%;
  text-transform: uppercase;
`
export const Resume = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1060px) {
    flex: inherit;
  }
`
export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 11px;

  @media (max-width: 1060px) {
    padding: 0;
  }
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

  @media (max-width: 1060px) {
    border-bottom: none;
  }
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
