import React from 'react'
import styled from 'styled-components'

const defaultProps = {}
const propTypes = {}

const Container = styled.div`
  background: white;
`

export const NotFound = () => {
  return (
    <Container>
      Not found
    </Container>
  )
}

NotFound.defaultProps = defaultProps
NotFound.propTypes = propTypes

export default NotFound
