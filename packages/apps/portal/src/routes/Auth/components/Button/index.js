import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
const Label = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  text-transform: uppercase;
`

export const Button = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Label>{children}</Label>
    </Container>
  )
}

export default Button
