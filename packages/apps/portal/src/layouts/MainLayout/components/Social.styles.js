import styled from 'styled-components'
import { media } from '@project/components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  ${media.mobile} {
    justify-content: flex-start;
  }
`
export const Item = styled.a`
  margin-right: 16px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
