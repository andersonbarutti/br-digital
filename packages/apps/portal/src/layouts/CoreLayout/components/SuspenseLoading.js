import React from 'react'
import styled from 'styled-components'
import { Theme, Loading } from '@project/components'

const LoadingContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SuspenseLoading = () => {
  return (
    <Theme>
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    </Theme>
  )
}

export default SuspenseLoading
