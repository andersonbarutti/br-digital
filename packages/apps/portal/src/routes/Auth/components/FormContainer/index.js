import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.onBackground};
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.white};
  width: 300px;
  padding: 36px;
`

export const FormContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default FormContainer
