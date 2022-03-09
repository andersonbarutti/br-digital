import styled from 'styled-components'
import { media } from '@project/components'

export const Container = styled.div`
  margin-bottom: 100px;
`
export const Content = styled.div``
export const Main = styled.div``
export const Title = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 42px;
`

export const FormGroup = styled.div`
  max-width: 535px;
  width: 100%;
`
export const Header = styled.div``
export const FormTitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 24px;
`
export const Form = styled.div``
export const FormRow = styled.div`
  display: flex;
  & > div:first-child {
    margin-right: 24px;
  }

  ${media.mobile} {
    & > div:first-child {
      margin-right: 0;
    }
    flex-direction: column;
  }
`
export const Field = styled.div`
  margin-bottom: 24px;
  flex: 1;
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

  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
  }
`
