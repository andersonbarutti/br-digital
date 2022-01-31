import React from 'react'
import styled from 'styled-components'
import { Loading } from '@project/components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`

export default function Ghost() {
  return (
    <Container>
      <Loading />
    </Container>
  )
}
