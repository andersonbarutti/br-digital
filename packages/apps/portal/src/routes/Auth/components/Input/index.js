import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Label = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 16px;
`
const InputComponent = styled.input`
  height: 44px;
  width: 100%;
  background: white;
  border: 1px solid ${props => props.theme.colors.white};
  outline: none;
  padding: 14px 8px;
  color: ${props => props.theme.colors.black};
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: ${props => props.theme.colors.black};;
  opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${props => props.theme.colors.black};;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${props => props.theme.colors.black};;
  }
`

export const Input = ({ label, ...props }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputComponent {...props} />
    </Container>
  )
}

export default Input
